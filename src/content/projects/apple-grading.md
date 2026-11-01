---
title: Apple Measurement
description: >-
  A desktop computer-vision app that detects apples from photos or a live
  webcam, measures their diameter in centimetres, and assigns a grade and
  selling price using classic image processing.
cover: ../../assets/projects/apple_measurement/01-showcase.png
repo: https://github.com/FazryJavier/AppleMeasurement
tags: ['Python', 'OpenCV', 'NumPy', 'PyQt5', 'pytest']
categories: ['ml']
gallery:
  - src: ../../assets/projects/apple_measurement/02-application.png
    alt: The Apple Measurement PyQt5 window showing the input, annotated output, price and grade, and the live camera toolbar
    caption: The desktop application
  - src: ../../assets/projects/apple_measurement/03-pipeline.png
    alt: The five processing steps on a sample photo, from HSV segmentation to grade and price, with the grade table
    caption: Processing pipeline
  - src: ../../assets/projects/apple_measurement/04-calibration.png
    alt: ArUco marker homography turning pixels into centimetres on a tilted scene, with the printable A4 marker
    caption: Calibration with an ArUco marker
  - src: ../../assets/projects/apple_measurement/05-results.png
    alt: Detection results on eight sample photos with red and green apples on plain and cluttered backgrounds
    caption: Detection results
  - src: ../../assets/projects/apple_measurement/06-canny.png
    alt: Hand-written Canny edge detector shown stage by stage from blur to hysteresis
    caption: Hand-written Canny edge detector
highlights:
  - Live webcam measurement at camera frame rate, about 11 ms per 720p frame, with a 15-frame median per apple to remove jitter.
  - A printed ArUco marker gives a homography from image to centimetres, correcting both distance and camera tilt; calibration can be saved and reused.
  - Error of at most 0.10 cm on frontal and 0.15 cm on tilted synthetic test scenes.
  - Grades apples into Premium, Regular, and Super Saver price classes, and prices several apples together.
  - Canny edge detector written by hand in NumPy, covering convolution, Sobel, non-max suppression, and hysteresis.
  - 69 automated tests covering grading, calibration, detection edge cases, and the GUI.
caseStudy:
  context: Small fruit sellers grade apples by eye. The course goal was to sort apples into price classes from a camera using classic image processing instead of a trained neural network.
  contribution: Worked in a group of three on the detection and measurement pipeline, calibration, grading, and the PyQt5 interface.
  outcome: A desktop tool that detects apples, reports their diameter in cm, and shows the grade and price from photos or a live camera. Accuracy against real apples measured with a ruler has not been benchmarked yet.
year: 2022
order: 8
---

Apple Measurement is a computer-vision desktop app that measures apples and
grades them by diameter, built as a group course project.
