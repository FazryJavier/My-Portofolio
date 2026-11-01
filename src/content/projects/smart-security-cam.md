---
title: Smart Security Cam
description: >-
  An IoT home security camera you can monitor from any browser: live ESP32-CAM
  video, servo pan and tilt, PIR motion alerts, and an activity log, built as a
  team from concept to tested prototype.
cover: ../../assets/projects/iot/01-showcase.png
repo: https://github.com/FazryJavier/IoTCamSecurity
tags: ['ESP32-CAM', 'MQTT', 'Laravel 12', 'Chart.js', 'Fritzing', 'UI/UX']
categories: ['iot', 'web']
gallery:
  - src: ../../assets/projects/iot/02-mobile.png
    alt: Smart Security Cam dashboard on four phone screens
    caption: Login, live stream, motion and movement control, activity log
  - src: ../../assets/projects/iot/03-hardware.png
    alt: Concept poster, Fritzing circuit diagram, and the finished prototype
    caption: From concept to hardware
  - src: ../../assets/projects/iot/04-design-system.png
    alt: Smart Security Cam colour palette, typography, and components
    caption: Design system
  - src: ../../assets/projects/iot/05-architecture.png
    alt: Data flow between the ESP32-CAM, MQTT broker, Laravel backend, and browser
    caption: System architecture
  - src: ../../assets/projects/iot/06-full-page.png
    alt: The complete Smart Security Cam desktop dashboard
    caption: Full dashboard
highlights:
  - Live MJPEG streaming from the ESP32-CAM, with a laptop webcam as a no-hardware alternative.
  - PIR motion detection with a status panel, activity chart, and browser notifications.
  - Pan and tilt control from a D-pad, sliders, or arrow keys, sent to the servos over MQTT.
  - Activity log with motion snapshots and durations; device online/offline tracked through an MQTT last-will message.
  - Dashboard styled after the concept poster and kept comfortable on desktop and mobile.
caseStudy:
  context: A team project to monitor a home from anywhere and be told when something moves, carried out from design through end-to-end testing.
  contribution: Worked as UI/UX designer, IoT engineer, and full-stack developer, covering the visual concept, the Fritzing circuit, the ESP32 firmware, and the Laravel dashboard.
  outcome: A working prototype that streams video, reports motion, and lets users aim the camera remotely from a responsive web dashboard.
year: 2023
order: 6
---

Smart Security Cam is an IoT home security system built on the ESP32-CAM, an
MQTT broker, and a Laravel dashboard, with servo-driven camera movement and PIR
motion alerts.
