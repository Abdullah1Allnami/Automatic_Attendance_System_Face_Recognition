# Real-Time Face Recognition System

This project implements a real-time face recognition system using Python, OpenCV, and the `face_recognition` library. The system encodes images from a database, detects faces from a webcam feed, and matches them with the database in real time.

---

## Features

- **Database Encoding**: Encodes images in a specified folder (`Resources/images`) and saves the encodings for later use.
- **Real-Time Detection**: Uses a webcam to capture frames and detects faces in real time.
- **Face Matching**: Matches detected faces with the pre-encoded database and displays the results.
- **Dynamic Visualization**: Overlays results on a background image for better visualization.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Python 3.8 or later
- Required libraries: OpenCV, face_recognition, numpy, cvzone, and pickle.

To install the required libraries, run:
```bash
pip install opencv-python face_recognition numpy cvzone
