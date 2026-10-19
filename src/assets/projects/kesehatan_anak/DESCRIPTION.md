# Healthy Care — Child Health Data Website

**Case study · Web design, copywriting, and full-stack development**

A public website that puts a Google Looker Studio dashboard of children's health and disease data in context: plain-language disease education, latest news, and a role-based admin panel that lets non-developers manage the content.

---

## Short description (for a portfolio card or CV)

> Healthy Care is a child-health information site for West Java. It embeds a Looker Studio dashboard, explains common childhood diseases in plain language, and publishes news through a Filament admin panel with role-based access. I designed the UI and design system, wrote the copy, and built the app with Laravel 12, Filament 4, and PostgreSQL.

**One-liner:** *Making children's health data understandable, with a design system built for trust and accessibility.*

---

## The problem

Health data lives in dashboards that analysts understand, but families do not. A raw dashboard has no context: no explanation of what a number means, what to prevent, or when to see a health worker. Content also goes stale when only developers can update the site.

## The solution

- A calm, friendly public site that wraps the dashboard with context.
- Disease education pages (stunting, dengue fever, malnutrition, pneumonia): symptoms, prevention, and *when to go to a health facility*.
- A news section with categories, scheduled publishing, and cited sources.
- An admin panel with roles, so the right people can change the right things.

The dashboard is integrated as an **iframe embed**. The site does not read or parse the data inside it; this was a deliberate scope choice because the project's goal was learning Looker Studio and how to integrate it into a web app.

## My role

UI/UX and design system, copywriting, front-end, back-end, database, authorization, and automated tests.

---

## Key features

**Public site**
- Home, Disease Education, Latest News (category filter, pagination), news detail pages, and a full dashboard page.
- Graceful empty states: every page works before any content exists.
- Mobile-first layout, skip-to-content link, keyboard-friendly navigation, "Open full dashboard" button for small screens.
- Medical disclaimer on every relevant page.

**Admin panel (Filament 4 + Shield)**
- Roles: *super admin*, *editor* (manage news, view dashboards), *viewer* (read-only), with per-resource permissions.
- News with title, auto-generated slug, category, excerpt, Markdown content, draft/published status, scheduled publish date, "featured" flag, and source name and link.
- Dashboard URL management, restricted to Looker Studio links.
- Admin accounts created from the command line or by a super admin; no public registration.

---

## Design system

Documented as a design system with tokens and components.

- **Principles:** warm, not clinical · trustworthy · data first · usable by everyone · calm when discussing illness.
- **Color:** teal primary (`#0B7A85`), sunny yellow accent (`#FFC857`), plus coral, mint, and sky tones mapped to each disease. Each disease color is always paired with an icon and a label.
- **Typography:** Nunito (headings, rounded and friendly) and Nunito Sans (body, clear for reading and numbers).
- **Accessibility:** contrast ratios measured against WCAG 2.1. For example, ink on white is 11.86:1, white on the primary teal is 5.08:1, and a color pair that failed (white on `#D9503F`, 4.06:1) was ruled out for text.
- **Components:** buttons, badges, disease cards, news cards, dashboard frame, empty states, footer.

---

## Engineering highlights

| Area | What I did |
|---|---|
| **Stack** | Laravel 12, Filament 4, Filament Shield (Spatie Permission), PostgreSQL, Blade, Bootstrap 4 grid |
| **Authorization** | Role-based access enforced server-side through policies; accounts without a role cannot enter the panel |
| **Security** | No public registration; dashboard URLs restricted to `lookerstudio.google.com`; iframe sandboxed; news Markdown stripped of raw HTML and unsafe links; source links must be HTTPS and are re-checked on render |
| **Data model** | Additive, reversible migrations; existing rows backfilled when new news fields were added |
| **Quality** | 31 automated tests covering public pages, admin access per role, validation, publishing rules, and sanitising; test suite runs on in-memory SQLite so it cannot touch development data |
| **Upgrade** | Moved the project to Laravel 12 because every Laravel 11 release was blocked by security advisories |

---

## Image captions and alt text

| File | Caption | Alt text |
|---|---|---|
| `01-showcase.png` | Healthy Care on laptop and mobile | A laptop and a phone showing the Healthy Care home page next to the project title and tags |
| `02-mobile.png` | Comfortable to read on mobile | Three phone screens: home hero, color-coded disease cards, and the news list with category filters |
| `03-design-system.png` | The Healthy Care design system | A board showing the color palette with hex codes, Nunito typography, measured contrast ratios, buttons, badges, and disease cards |
| `04-full-page.png` | Full home page | The complete home page in a browser frame: hero, about, disease education, dashboard, latest news, and footer |
| `05-admin-panel.png` | Admin panel with role-based access | Filament admin screens showing the news list, the news form, and the roles and permissions list |

---

## Honest notes (read before publishing)

- **Hero illustration:** the illustration on the home page comes from the original website template, not from me. Replace it with your own or licensed artwork, or credit its source.
- **Dashboard in `04-full-page.png`:** the chart is an illustrative placeholder labeled "Sample data", because the real Looker Studio report was not yet connected. Swap in a real screenshot when available.
- **Sample content:** some news items in the images are sample text written for the screenshots. Replace them with real content if you want every item to be real.
- **Language:** the site UI is Indonesian; the captions in these images are English. The admin panel mixes English (Filament defaults) and Indonesian field labels.
- **Medical content:** disease information is general educational text and has not yet been reviewed by a health professional. Do not present it as medical advice.

---

## Tags

`Web Design` `UI/UX` `Design System` `Copywriting` `Accessibility` `Laravel` `Filament` `PostgreSQL` `RBAC` `Looker Studio`
