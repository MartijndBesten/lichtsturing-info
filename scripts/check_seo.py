#!/usr/bin/env python3
"""Validate indexability of public HTML pages in the static website."""
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "docs"
DOMAIN = "lichtsturing.info"
SITEMAP = f"https://{DOMAIN}/sitemap.xml"
errors = []

def check(condition, message):
    if not condition:
        errors.append(message)

robots_path = ROOT / "robots.txt"
check(robots_path.is_file(), "docs/robots.txt ontbreekt")
if robots_path.is_file():
    robots = robots_path.read_text(encoding="utf-8")
    check(not re.search(r"(?im)^\s*disallow\s*:\s*/\s*$", robots), "robots.txt blokkeert de hele site")
    check(re.search(r"(?im)^\s*sitemap\s*:\s*" + re.escape(SITEMAP) + r"\s*$", robots), "robots.txt mist publieke sitemap")

sitemap_path = ROOT / "sitemap.xml"
check(sitemap_path.is_file(), "docs/sitemap.xml ontbreekt")
urls = []
if sitemap_path.is_file():
    try:
        doc = ET.parse(sitemap_path)
        urls = [x.text.strip() for x in doc.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc") if x.text]
    except (ET.ParseError, OSError) as exc:
        errors.append(f"XML-sitemap ongeldig: {exc}")
check(bool(urls), "Geen URL's in sitemap")
check(len(set(urls)) == len(urls), "Dubbele URL's in sitemap")

for url in urls:
    parts = urlsplit(url)
    if parts.scheme != "https" or parts.netloc != DOMAIN or not parts.path.startswith("/nl/") or not parts.path.endswith("/"):
        errors.append(f"Onverwachte sitemap-URL: {url}")
        continue
    target = ROOT / unquote(parts.path).lstrip("/") / "index.html"
    if not target.is_file():
        errors.append(f"Sitemap-URL heeft geen HTML: {url}")
        continue
    html = target.read_text(encoding="utf-8")
    robots_meta = re.search(r'<meta\s+name=["\x27]robots["\x27]\s+content=["\x27]([^"\x27]+)["\x27]', html, re.I)
    check(robots_meta is not None, f"Robots-meta ontbreekt: {url}")
    if robots_meta:
        value = robots_meta.group(1).lower()
        check("noindex" not in value and "index" in value, f"Indexering geblokkeerd: {url} ({value})")
    canonical = re.search(r'<link\s+rel=["\x27]canonical["\x27]\s+href=["\x27]([^"\x27]+)["\x27]', html, re.I)
    check(canonical is not None and canonical.group(1) == url, f"Canonical wijkt af: {url}")
    check(re.search(r'<title>[^<]+</title>', html, re.I) is not None, f"Titel ontbreekt: {url}")
    check(re.search(r'<meta\s+name=["\x27]description["\x27]', html, re.I) is not None, f"Description ontbreekt: {url}")

for relative in ("404.html", "index.html"):
    target = ROOT / relative
    if target.is_file():
        check("noindex" in target.read_text(encoding="utf-8").lower(), f"{relative} moet noindex blijven")

if errors:
    print("SEO-controle mislukt:")
    for error in errors:
        print(f" - {error}")
    sys.exit(1)
print(f"SEO-controle geslaagd: {len(urls)} publieke sitemap-URL's indexeerbaar.")
