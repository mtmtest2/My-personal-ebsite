---
name: design-md-library
description: >-
  Reference library of 84 DESIGN.md files (VoltAgent/awesome-design-md, MIT): plain-text design
  systems analysed from real product sites (colour tokens, type scales, spacing, components, do's and
  don'ts). Use when writing or updating a DESIGN.md for this project, when deciding how to document a
  token or component rule, or when studying how a mature product structures its design language.
  Not a style to copy onto Fartash.
---

# DESIGN.md library

`library/<site>.md` holds one DESIGN.md per site; `INDEX.md` lists them with a one-line summary.
Search it before reading files whole, for example:

```bash
grep -il "serif" .claude/skills/design-md-library/library/*.md
grep -n "^## " .claude/skills/design-md-library/library/stripe.md
```

## How to use it here

- **Learn the structure, not the look.** The files are good models of what a DESIGN.md should record:
  token tables, type scale, radii, elevation, component states, and explicit do's and don'ts.
- **Never transplant a brand.** Each file describes another company's identity (and often its
  trademarks). Fartash keeps its own system: tokens in `app/globals.css` and `tailwind.config.ts`,
  the phrasebook hero, the turquoise highlighter for words being learned, Vazirmatn and Markazi.
- **Check against the house rules.** Many of these sites use devices that `design-taste-frontend`
  bans on this project (hairline grids, monospace labels, glass panels). The taste skill wins.
- **Persian and RTL** are not covered by any file here; translate the ideas, not the values.

Source: https://github.com/voltagent/awesome-design-md (MIT, see LICENSE).
