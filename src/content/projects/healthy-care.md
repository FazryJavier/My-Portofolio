---
title: Healthy Care
description: >-
  A child-health information site for West Java that puts a Looker Studio
  dashboard in context with plain-language disease education, news, and a
  role-based admin panel.
cover: ../../assets/projects/kesehatan_anak/01-showcase.png
repo: https://github.com/FazryJavier/BI-KesehatanAnak
tags: ['Laravel 12', 'Filament 4', 'PostgreSQL', 'Looker Studio', 'Design System']
categories: ['web', 'cms']
featured: true
gallery:
  - src: ../../assets/projects/kesehatan_anak/02-mobile.png
    alt: Healthy Care on three phone screens
    caption: Comfortable to read on mobile
  - src: ../../assets/projects/kesehatan_anak/03-design-system.png
    alt: Healthy Care colour palette, typography, and components
    caption: Design system
  - src: ../../assets/projects/kesehatan_anak/04-full-page.png
    alt: The complete Healthy Care home page
    caption: Full home page
  - src: ../../assets/projects/kesehatan_anak/05-admin-panel.png
    alt: Filament admin screens for news and roles
    caption: Admin panel with roles
highlights:
  - Disease education pages with symptoms, prevention, and when to visit a health facility.
  - News with categories, scheduled publishing, and cited sources.
  - Roles (super admin, editor, viewer) enforced server-side through policies.
  - Dashboard URLs restricted to Looker Studio, a sandboxed iframe, and sanitised Markdown.
  - 31 automated tests running on in-memory SQLite.
caseStudy:
  context: Health dashboards make sense to analysts but not to families, and content goes stale when only developers can update it.
  contribution: Designed the UI and design system, wrote the copy, and built the app with Laravel 12, Filament 4, and PostgreSQL.
  outcome: A public site that explains the data in context, with an admin panel that lets non-developers manage the content.
year: 2024
order: 2
---

Healthy Care wraps a Looker Studio dashboard of children's health data with
disease education and news, managed through a role-based Filament admin panel.
