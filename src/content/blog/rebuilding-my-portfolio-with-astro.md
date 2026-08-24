---
title: Rebuilding My Portfolio with Astro and Tailwind
description: Why I moved my portfolio from a static HTML site to Astro + Tailwind CSS, and what I learned about performance, content modeling, and dark mode along the way.
pubDate: 2026-08-24
tags: ['Astro', 'Tailwind CSS', 'Web']
---

My portfolio started as a single `index.html` file with a stylesheet and a bit
of vanilla JavaScript. It worked, but every new project meant copy-pasting
markup, and the contact form did not actually send anything. So I rebuilt it
with **Astro** and **Tailwind CSS**.

## Why Astro

A portfolio is mostly static content, which makes it a perfect fit for a static
site generator. Astro ships almost no JavaScript by default, so the site is fast
and scores well on Lighthouse — while still letting me drop in interactivity
where I actually need it (the typing effect, the theme toggle, the contact form).

## Content as data, not markup

The biggest win was moving content out of HTML and into typed data. Projects
live in Markdown, and my experience, skills, and profile live in small TypeScript
files:

```ts
export const experience = [
  { period: 'Jan 2026 - Present', title: 'Fullstack Developer', subtitle: 'GITS Indonesia' },
  // ...
];
```

Adding a new project is now a three-minute job instead of a copy-paste chore.

## Dark mode without the flash

I wanted a real light/dark toggle. The trick is to set the theme **before** the
page paints, using a tiny inline script in the `<head>`:

```html
<script is:inline>
  const stored = localStorage.getItem('theme');
  document.documentElement.classList.toggle('dark', stored ? stored === 'dark' : true);
</script>
```

Combined with Tailwind v4's `@theme inline` tokens, the whole palette switches at
runtime with zero flicker.

## Takeaways

- Model your content as data — your future self will thank you.
- Optimize images at build time; Astro turned a 3.2 MB PNG into a 63 KB WebP.
- Ship less JavaScript. Most of a portfolio does not need a framework runtime.

If you are still on a hand-written HTML portfolio, this migration is very much
worth it.
