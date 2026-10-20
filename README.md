# lichtsturing.info

Dit is de **gegenereerde publieke distributie** van <https://lichtsturing.info>: een merkonafhankelijk kennisplatform
over lichtsturing. Normen, productdocumentatie en projectspecificaties blijven leidend.

- In `docs/` staat uitsluitend de statische website (HTML, CSS, JavaScript, zoekdata en sitemap), met onder `docs/3d/`
  een interactieve 3D-demo (eigen statische build). Deze map wordt bij iedere
  publicatie automatisch volledig vervangen; wijzig hier niets met de hand.
- Broncode, content, bronnen en redactie worden elders beheerd. Deze repository bevat geen bronbestanden.
- De 41 publieke pagina’s in `docs/sitemap.xml` zijn bedoeld voor indexering. Test- en overige niet-publieke indexdoelen behouden hun `noindex`-instelling.
- **Let op:** bij iedere nieuwe publicatie wordt `docs/` vanuit de externe broncode opnieuw gegenereerd. De generator moet daarom dezelfde SEO-instellingen toepassen, anders keert de oude indexeringsblokkade terug.
- Productnamen en merknamen behoren toe aan hun respectieve rechthebbenden.
- Iedere publicatiecommit heet „Publicatie <commit>”; terugdraaien kan door die commit terug te zetten.

## Bezoekersteller (dashboard.denckh.nl)

De openbare pagina's (precies die in `docs/sitemap.xml`) hebben de cookieloze teller van het Denckh.-dashboard en een korte privacyregel in de voettekst. Zolang de generator dit niet zelf doet: **na iedere publicatie** `python scripts/teller.py` draaien (idempotent) en controleren met `python scripts/teller.py --controleer`. Test-, preview- en noindex-pagina's krijgen geen teller. De teller zet geen cookies en legt alleen pagina, dag en herkomstcategorie vast. Verwijderen: het script uit de generator/publicatie weglaten.
