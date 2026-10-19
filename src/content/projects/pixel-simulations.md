---
title: PixelSimulations
description: >-
  An interactive image-processing simulator that lets students upload a photo,
  tune parameters, and compare the original with the result side by side.
cover: ../../assets/projects/pixel_simulation/01-showcase.png
repo: https://github.com/dzakiabd/pixel-simulations-v3
tags: ['Python', 'Streamlit', 'OpenCV', 'scikit-image', 'pytest']
categories: ['web', 'ml']
gallery:
  - src: ../../assets/projects/pixel_simulation/02-mobile.png
    alt: PixelSimulations on phone screens
    caption: Single-column layout on phones
  - src: ../../assets/projects/pixel_simulation/03-design-system.png
    alt: PixelSimulations blue and cyan design system board
    caption: Design system
  - src: ../../assets/projects/pixel_simulation/04-full-page.png
    alt: The complete PixelSimulations interface
    caption: Full page
highlights:
  - 19 simulations across pre-processing, segmentation, feature extraction, and effects.
  - Camera snapshots for every process, plus an optional real-time Live Camera page.
  - Processing logic split from the UI layer and covered by 56 automated tests.
  - Result download as PNG; no images are stored on the server.
caseStudy:
  context: Students learning digital image processing needed a way to see what each operation actually does.
  contribution: Designed the interface and design system, implemented the simulations, refactored the code into a testable module, and added camera input.
  outcome: A responsive simulator with side-by-side comparison and live parameter controls, built for Itenas × Kampus Merdeka.
order: 5
---

PixelSimulations is a web app for exploring digital image-processing operations
with live parameters and side-by-side results.
