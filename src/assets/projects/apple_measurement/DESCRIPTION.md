# Apple Measurement — Portfolio

**Computer vision desktop app that detects apples, measures their diameter and
assigns a grade and selling price — from photos or a live webcam feed.**

- **Type:** Image processing / computer vision course project (Group D4)
- **Team:** Abdur Rafi Syach Ridwan, Fazry Javier Nugraha, M. Irfan Firdaus
- **Stack:** Python, OpenCV, NumPy, PyQt5, pytest
- **Repository:** https://github.com/FazryJavier/AppleMeasurement

## Portfolio images

| File | Size | Content |
|---|---|---|
| `01-showcase.png` | 2400×1500 | Cover: laptop mockup with the real app window, project title, tags (Computer Vision, Image Processing, OpenCV, PyQt5, Python) and key numbers. Use as the portfolio thumbnail. |
| `02-application.png` | 2400×1500 | Full screenshot of the real PyQt5 window: input, annotated output, price and grade, toolbar with live camera and mask view. |
| `03-pipeline.png` | 2400×1500 | The five processing steps on a real sample photo — input, HSV segmentation, morphology, shape check, grade & price — plus the grade/price table. Shows the process, not just the result. |
| `04-calibration.png` | 2400×1500 | How pixels become centimetres: ArUco marker homography on a tilted synthetic scene (6.6 cm measured vs 6.5 cm ground truth), the three scale sources and the printable A4 marker. |
| `05-results.png` | 2400×1500 | Detection results on eight sample photos: red and green apples, plain and cluttered backgrounds, one to fifteen apples per image. |
| `06-canny.png` | 2400×1100 | Hand-written Canny edge detector, stage by stage (blur, Sobel, non-max suppression, double threshold, hysteresis). |

All images are rendered by `portfolio/generate.py` from the app's real output;
regenerate them with `.venv\Scripts\python portfolio\generate.py`.

## Problem

Small fruit sellers grade apples by eye. The goal was an app that sorts apples
into price classes automatically from a camera, using classic image
processing taught in the course rather than a trained neural network.

## Solution

1. **Detection** — Gaussian blur → HSV colour segmentation for red, yellow and
   green skins (high saturation thresholds reject skin, wood and pale
   backgrounds) → morphological closing and hole filling to recover specular
   highlights → per-object opening that removes stems and leaves → shape
   validation (circularity, solidity, not cut by the frame). Objects that touch
   another colour are re-segmented per colour; small objects attached to a
   larger apple are treated as leaves. Rejection reasons are shown to the user.
2. **Measurement** — the apple contour is projected into centimetres and the
   diameter is the longest side of its minimum-area rectangle. In live mode a
   per-apple median over 15 frames removes jitter.
3. **Calibration** — a printed ArUco marker gives a homography from image to
   centimetres, correcting both distance and camera tilt. The calibration can
   be saved once and reused without the marker; without either, a default
   scale keeps the app usable.
4. **Grading** — Premium (7–8 cm, Rp12.200), Regular (6–<7 cm, Rp9.500),
   Super Saver (5–<6 cm, Rp7.500), Too small (< 5 cm), Out of range (> 8 cm).
   Multiple apples are priced together.

## Highlights

- Live webcam measurement at camera frame rate (~11 ms processing per 720p frame).
- ≤ 0.10 cm error on frontal and ≤ 0.15 cm on tilted synthetic test scenes.
- Exact-size printable marker PDF with a 10 cm ruler to verify print scale.
- Manual Canny implementation (convolution, Sobel, NMS, hysteresis) in NumPy.
- 69 automated tests covering grading, calibration, detection edge cases and the GUI (offscreen, with a fake camera).

## Limitations

- Colour-based detection needs a plain background; touching apples of the same
  colour are skipped.
- Sizes from photos without a marker or saved calibration are estimates.
- Accuracy against real apples measured with a ruler has not been benchmarked yet.
