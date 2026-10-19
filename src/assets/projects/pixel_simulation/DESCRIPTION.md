# PixelSimulations — Interactive Image Processing Simulator

**Role:** UI/UX design, front-end, and image-processing implementation
**Stack:** Python · Streamlit · OpenCV · scikit-image · NumPy · Pillow · matplotlib · pytest
**Context:** Educational project for Itenas × Kampus Merdeka

## Overview
PixelSimulations is a web app that lets students *see* what digital image processing operations do. Upload a photo (or take one with the camera), pick a process, adjust its parameters, and compare the original with the result side by side.

## What I did
- **Designed the interface and a small design system** — blue palette with a cyan accent, an image-first layout, and a consistent pattern on every page (header → upload → original | result).
- **Built 19 simulations** across pre-processing, segmentation and feature extraction, plus effects: grayscale, histograms, histogram equalization, contrast stretching, interpolation, filtering, edge detection, sharpening, thresholding (global/Otsu), color moments, HOG, LBP, emboss, and sepia.
- **Refactored the codebase** into a pure, testable processing module and a separate UI layer, and fixed correctness bugs (RGB/BGR channel mix-ups, RGBA/grayscale crashes, divide-by-zero, overflow).
- **Added camera input** — snapshot capture for every process, plus an optional real-time Live Camera page (WebRTC) isolated in its own module with lazy imports, so a missing dependency can never break the core app.
- **Made it responsive** — two-column comparison on desktop, single column on phones; fixed a mobile hero-title wrapping bug.
- **Quality:** 56 automated tests, every process smoke-tested end to end, result download as PNG, no images stored on the server.

## Highlights
- Side-by-side original vs. result with live parameter controls
- Histogram equalization performed on luminance to preserve color
- Graceful degradation: optional features fail with a friendly message, not a crash

## Assets
`01-showcase.png` (cover) · `02-mobile.png` · `03-design-system.png` · `04-full-page.png`
