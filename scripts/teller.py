#!/usr/bin/env python3
"""Cookieloze bezoekersteller van het Denckh.-dashboard (bouwsteen B69) op de openbare pagina's.

Zet het tellerscript en een korte privacyregel in de voettekst op precies de pagina's uit docs/sitemap.xml
(de openbare, indexeerbare pagina's); test-, preview- en noindex-pagina's blijven zonder teller.
Idempotent: een pagina die de teller al heeft, wordt niet opnieuw aangepast.

De teller zet geen cookies en stuurt alleen het pad (zonder querystring), de verwijzende host en utm_source.

    python scripts/teller.py              # toepassen (na iedere publicatie, zolang de generator het niet zelf doet)
    python scripts/teller.py --controleer # alleen controleren; exitcode 1 als een openbare pagina de teller mist
"""
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "docs"
DOMAIN = "lichtsturing.info"
TAG = '<script defer src="https://dashboard.denckh.nl/s.js" data-brand="lichtsturing"></script>'
PRIVACY = ('<p class="footer-disclaimer" data-teller>Bezoek wordt anoniem geteld, zonder cookies: alleen pagina, dag en '
           'herkomstcategorie. Er worden geen persoonsgegevens vastgelegd.</p>')


def openbare_paginas():
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    paden = []
    for loc in ET.parse(ROOT / "sitemap.xml").getroot().findall("s:url/s:loc", ns):
        u = urlsplit(loc.text.strip())
        if u.netloc != DOMAIN:
            continue
        pad = unquote(u.path).lstrip("/")
        bestand = ROOT / pad / "index.html" if pad == "" or pad.endswith("/") else ROOT / pad
        paden.append(bestand)
    return paden


def pas_toe(html):
    if TAG in html:
        return html
    if html.count("</head>") != 1:
        raise ValueError("geen eenduidige </head>")
    html = html.replace("</head>", TAG + "\n</head>", 1)
    voet = '<p class="footer-disclaimer">'
    if voet in html and "data-teller" not in html:
        einde = html.index("</p>", html.index(voet)) + len("</p>")
        html = html[:einde] + "\n" + PRIVACY + html[einde:]
    return html


def main():
    controleer = "--controleer" in sys.argv
    paginas, fouten, gewijzigd = openbare_paginas(), [], 0
    for p in paginas:
        if not p.is_file():
            fouten.append(f"{p.relative_to(ROOT)} ontbreekt")
            continue
        html = p.read_text(encoding="utf-8")
        if controleer:
            if TAG not in html:
                fouten.append(f"{p.relative_to(ROOT)} mist de teller")
            continue
        nieuw = pas_toe(html)
        if nieuw != html:
            p.write_text(nieuw, encoding="utf-8", newline="\n")
            gewijzigd += 1
    for f in fouten:
        print("FOUT", f)
    print(f"{len(paginas)} openbare pagina's, {gewijzigd} aangepast, {len(fouten)} fouten")
    return 1 if fouten else 0


if __name__ == "__main__":
    sys.exit(main())
