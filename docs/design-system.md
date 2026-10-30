# Fartash Design System

Live reference: `/design-system` (run `npm run dev`). Tokens live in
`app/globals.css` (CSS variables) and `tailwind.config.ts`; components live in
`components/ui/`.

## 1. Identity

**Who it's for.** Adults in Iran learning a new language for work, migration
or an exam (IELTS, TOEFL, Goethe, DELF, TÖMER). They are serious, short on
time, and comparing us with institutes they can walk into. The site has to
feel like a school with standards, not an app with confetti.

**The idea: two scripts, one page.** Every Fartash screen holds two
languages: the Persian voice of the school, and the language the student is
learning. The system makes that visible:

- Persian (the school talking) is set in a clean, modern Persian sans.
- The target language (what the student is learning) is set in a book serif,
  italic for example phrases, the way a good dictionary or phrasebook does it.
- The **turquoise highlighter** marks the words a student is learning. It is
  never used for decoration.

This gives the brand one recognisable move that comes from the subject itself.
Everything else stays quiet.

**Colour story.** The logo is lapis blue fading into turquoise. Those are also
the two colours of Persian tilework (لاجورد و فیروزه), so the palette is
taken from the logo and carries a cultural reference. We use the colours flat
and never as gradients or tile patterns, which would read as kitsch.

## 2. Colour

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `brand-600` (Lapis) | `#2B47D1` | `#3D5AE6` | Primary actions, links, focus, selected state |
| `ink` | `#121B45` | `#EEF1FB` | Headings; solid "ink" blocks (footer, CTA) |
| `body` | `#353C55` | `#C5CBE0` | Running text |
| `muted` | `#5F667B` | `#8F97B3` | Secondary text, captions, table headers |
| `accent-400` (Turquoise) | `#22C6DC` | `#22C6DC` | Highlighter fill, learning progress, live indicators |
| `accent-700` | `#0D6B7B` | `#3FD8EA` | Turquoise as text (passes AA) |
| `paper` | `#FFFFFF` | `#0A1029` | Page background |
| `tint` | `#F5F7FB` | `#10183A` | Alternate sections, inset areas, panel background |
| `rule` | `#E3E7EF` | `#243056` | Dividers and card borders |
| `line` | `#8A91A6` | `#64709C` | Form control borders (≥3:1, WCAG 1.4.11) |
| `success` | `#147447` | `#4ADE9B` | Paid, active, completed |
| `warning` | `#A85A00` | `#F5B54A` | Needs attention, pending |
| `danger` | `#C0352B` | `#FF8A80` | Errors, destructive actions, failed |

Rules:
- **One primary.** Lapis is the only colour that says "press this". Turquoise
  never fills a button.
- **Turquoise means learning.** Highlighted target-language words, a
  learner's progress, and "class is live" use turquoise. Nothing else does.
- **Status colours are for status.** They are never used to tell categories
  apart (the old violet/amber/rose icon tiles are gone).
- **No gradients** on surfaces, text or buttons.
- Every text pair is at least 4.5:1 in both themes; measured values are in the
  table above.

## 3. Typography

| Role | Typeface | Why |
| --- | --- | --- |
| Persian (UI + display) | **Estedad** (variable, 100–900) | Drawn for Persian, with proper Persian digits and open, geometric letterforms. It fits the geometric wordmark in the logo and reads well at 13px. Vazirmatn is on nearly every Iranian site; Estedad is just as legible and less familiar. |
| Target language (Latin) | **Literata** (variable, optical sizes) | A reading serif with a large x-height that sits level with Estedad, a warm italic for example phrases, and full Turkish, German, French and Spanish coverage. |
| Target language (Arabic) | **Markazi Text** | A Naskh face, so Arabic examples look like book text and not like the Persian UI. |

How it's applied: any element with a `lang` attribute other than `fa` gets the
target-language face automatically (`<span lang="de">`). Latin that is part of
the UI (IELTS, email fields) stays in Estedad.

**Scale.** Major third (1.25), 16px base. Persian letterforms look smaller than
Latin at the same size, so nothing in the UI goes below 13px, and body text
uses a 1.9 line height so the dots above and below letters don't collide.

| Token | Size / line-height | Use |
| --- | --- | --- |
| `text-xs` | 13 / 1.7 | Captions, badges, table meta |
| `text-sm` | 14 / 1.8 | UI labels, dense tables, secondary text |
| `text-base` | 16 / 1.9 | Body |
| `text-lg` | 18 / 1.85 | Lead paragraphs |
| `text-xl` | 20 / 1.6 | Card titles |
| `text-2xl` | 24 / 1.5 | Panel/page titles |
| `text-3xl` | 30 / 1.4 | Section headings (mobile) |
| `text-4xl` | 38 / 1.3 | Section headings |
| `text-5xl` | 48 / 1.2 | Hero (tablet) |
| `text-6xl` | 60 / 1.15 | Hero (desktop) |

Rules:
- Weights: 400 body · 500 UI labels · 700 headings · 800 display only.
- **Never letter-space Persian.** Tracking breaks the joins between letters.
  The "uppercase tracked eyebrow" pattern doesn't exist in Persian and isn't
  used.
- Headings use `text-wrap: balance`; paragraphs use `pretty`.
- Body measure: at most 68 characters (`max-w-prose`).
- Numbers are shown in Persian digits through `fa()`. Don’t turn on tabular figures: Estedad’s are too wide for Persian digits.

## 4. Space, layout and shape

- **4px base unit**, using the Tailwind scale. Component spacing: 8, 12, 16, 24.
  Section rhythm: 64px on mobile, 96px on tablet, 128px on desktop.
- **Container:** 1200px max, gutters of 16 / 24 / 32px. Twelve columns on
  desktop. Text-led sections align to the start edge (right), not the centre.
- **Radius goes by role, not one value everywhere:**
  `4px` badges · `6px` buttons and inputs · `8px` small cards · `10px` panels
  and cards · `12–14px` sheets and dialogs · full circles only for avatars and dots.
  The Tailwind radius scale is capped at 14px so no page can drift back to
  bubbly 24px containers.
- **Elevation:** surfaces are separated by borders and tint, not shadows. One
  shadow (`shadow-pop`) is reserved for things that float: menus, dialogs,
  toasts.

## 5. Iconography

- **Lucide only**, 1.75 stroke (set globally), sizes 16 / 20 / 24 to match
  text size. Icons inherit `currentColor`.
- An icon must help someone scan or act (navigation, a button, a status).
  Icons are never put in coloured squares as decoration.
- Icon-only buttons always have an `aria-label` and a 40px hit area (44px on touch).
- **RTL:** "next" and "forward" point left (`ArrowLeft`, `ChevronLeft`). Icons
  that show time or media (clock, play) are never mirrored.
- No emoji anywhere in the UI.

## 6. Motion

- Easing: `ease-out` = `cubic-bezier(0.23, 1, 0.32, 1)` for anything that
  appears or responds; `ease-in-out` = `cubic-bezier(0.77, 0, 0.175, 1)` for
  things that move on screen.
- Durations: 120ms press/hover · 180ms menus, tabs, popovers · 240ms dialogs and
  sheets. Nothing in the UI is longer than 300ms.
- Buttons scale to 0.97 when pressed. Hover effects only apply on devices with
  a real pointer.
- No scroll-triggered fade-ins on every section. Motion responds to the user.
- `prefers-reduced-motion` removes movement and keeps short fades.

## 7. Components

| Component | Decisions |
| --- | --- |
| **Button** | `primary` (lapis fill), `secondary` (outline), `ghost` (text with hover tint), `danger`. Sizes `sm` 32 · `md` 40 · `lg` 48px. Loading keeps the width and swaps the icon for a spinner. No arrow glyphs appended to labels. |
| **Input / Select / Textarea** | 44px tall, 6px radius, ≥3:1 border, visible label always (placeholders are examples, never labels). Hint text below; the error message replaces the hint, in danger colour, linked with `aria-describedby`. |
| **Card / Panel** | 10px radius, `rule` border, no shadow. Panels have a title row and divide content with rules rather than nesting cards inside cards. |
| **Stat** | A number with a label, separated by a top rule. No icon tile. Rows of stats read like a report, not a grid of widgets. |
| **Table** | Muted 13px header on a tint row, rule dividers, start-aligned text, numbers aligned to the end edge (Estedad’s tabular Persian digits are too wide to use). Scrolls inside its own wrapper on small screens. |
| **Navigation** | Site: text links with an underline on hover and when current. Panel sidebar: current item marked with ink text and a lapis bar on the start edge, not a filled blue pill. Tabs: underline style, arrow-key navigation (RTL aware). |
| **Badge** | 4px radius, a status dot plus text, low-saturation fill. Text, not colour alone, carries the meaning. |
| **Avatar** | Circle, with a 2px paper ring when grouped. |
| **Progress** | 6px track; turquoise for learning progress, lapis for system progress (uploads etc.). |

### Touch

On touch screens (`pointer: coarse`), every regular button, icon button,
segmented option, tab, nav link and sidebar item has a 44px target; links that
stand alone (not inside a sentence) get `min-h-11`. Small buttons (`btn-sm`)
are for dense desktop toolbars only. Checkboxes are 18px but always sit inside
a label that is the 44px target.

### Tables

`.table` is `position: relative`. Without it, a visually hidden (`sr-only`,
absolutely positioned) header label escapes the table's scroll container, and
in RTL mobile Chrome widens the whole page to include it. On phones, lists
people check on the go (assignments, students, users) stack into rows; admin
catalogues keep a table that scrolls inside its card.

### Panels

A dashboard opens with what happens next: one ink `NextClass` panel per page
(turquoise marks the time), then a ruled row of stats, then panels of ruled
lists. No coloured icon tiles, no cards inside cards, one primary action per
row.

## 8. States

| State | Pattern |
| --- | --- |
| **Loading** | Skeletons that match the final layout for page content (no layout shift); an inline spinner inside the button that was pressed. Route segments have `loading.tsx`. |
| **Empty** | Explains what will appear here and offers the one action that fills it. A line icon at most, no illustration. Example: «هنوز تکلیفی نداری. تکلیف‌های هر جلسه بعد از کلاس اینجا می‌آید.» |
| **Error** | Says what happened and what to do, in the interface's voice, with no apology and no error codes as the headline. Inline field errors sit under the field; page errors use `app/error.tsx` with a retry. |
| **Success** | Confirms using the same verb as the action ("ذخیره کن" → «ذخیره شد»). Inline alert or toast, and it disappears without needing the user to dismiss it. |

## 9. Voice

Persian copy uses the informal «تو» form the site already uses, plain verbs,
and no marketing filler. Buttons say exactly what happens: «تعیین سطح رایگان»,
not «شروع کنید». Persian punctuation (، ؛ « ») and the zero-width non-joiner
(نیم‌فاصله) are required.
