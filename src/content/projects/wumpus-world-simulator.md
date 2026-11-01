---
title: Wumpus World Simulator
description: >-
  A browser game built on the classic AIMA Wumpus World: play by your senses
  alone, or watch an explainable logic agent reason its way through the cave one
  inference at a time.
cover: ../../assets/projects/wumpus_simulator/01-showcase.png
url: https://wumpusworldsimulator.pages.dev/
repo: https://github.com/FazryJavier/WumpusWorldSimulator
tags: ['JavaScript', 'Canvas', 'Web Audio', 'Knowledge-based Agent', 'Cloudflare Pages']
categories: ['game', 'web']
gallery:
  - src: ../../assets/projects/wumpus_simulator/02-mobile.png
    alt: Wumpus World Simulator on three phone screens showing play mode, the agent overlay, and the reasoning panel
    caption: Responsive down to 360 px
  - src: ../../assets/projects/wumpus_simulator/03-design-system.png
    alt: Wumpus World Simulator design tokens, typography, components, and pixel-art sprites
    caption: Design system
  - src: ../../assets/projects/wumpus_simulator/04-full-page.png
    alt: The complete Wumpus World Simulator interface in AI Agent mode
    caption: Full page
highlights:
  - An agent driven by inference rules K1–K11 that only sees percepts, never the hidden world, with every inference logged as a formula and in plain language.
  - Seeded levels validated to be solvable, shareable by link, in three difficulties with Classic and Arcade scoring.
  - Pixel-art sprites and chiptune sounds generated in code, with no image or audio assets.
  - Layered architecture with a pure, deterministic engine and 80 automated tests.
  - On 1,000 seeds per mode the agent never died from a provably avoidable mistake; it won 37.5% (Easy), 60.5% (Normal), and 77.9% (Hard).
  - Dark, light, and system themes, a colour-blind palette, reduced motion, and English and Bahasa Indonesia.
caseStudy:
  context: Wumpus World is a standard way to teach logical reasoning, but students usually meet it as static textbook diagrams, which makes the agent's reasoning hard to see.
  contribution: Designed and built it solo, including the engine, the knowledge-based agent, the pixel-art visuals, the design system, and the responsive interface.
  outcome: A playable, shareable simulator that makes each inference readable, built as a university course project and deployed on Cloudflare Pages.
year: 2023
order: 10
---

Wumpus World Simulator is a browser version of the classic Wumpus World with a
human-playable mode and a logic-based agent whose reasoning can be followed in
real time.
