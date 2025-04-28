# Automatic Attendance System (With Face Identification)

An automatic attendance system powered by **Face Recognition**, built with:

- ⚡ **Frontend:** Next.js (React)
- 🛠️ **Backend:** Node.js + Express
- 💃📊 **Database:** MongoDB (with Mongoose)
- 🔥 **Desktop App:** Electron

---

## 📸 Overview

This application automates the attendance process by recognizing faces through a camera feed. It captures live video, detects and matches faces against a database, and logs attendance records automatically.

The system is bundled into a **desktop app** using **Electron**, making it easy to run on Windows, macOS, and Linux.

---

## 🏗️ Project Structure

```
Automatic_Attendance_System_Face_Recognition/
├── frontend/         # Next.js app
├── backend/          # Node.js + Express server
├── main.js           # Electron main process
├── package.json      # Project dependencies and scripts
└── README.md         # This file
```

---

## 🚀 Features

- **Face Registration**: Add new users by capturing their facial images.
- **Real-time Face Recognition**: Detect and recognize faces live.
- **Automatic Attendance Logging**: Log recognized users into the database.
- **Cross-Platform App**: Runs as a standalone desktop application.
- **MongoDB Integration**: Store user profiles and attendance history.

---

## 🛠️ Technologies Used

- **Frontend**: Next.js, TailwindCSS (optional for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (managed through Mongoose)
- **Face Recognition**: Face-api.js or a custom model
- **Electron**: To wrap the web app into a desktop application

---

## 🧹 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Automatic_Attendance_System_Face_Recognition.git
cd Automatic_Attendance_System_Face_Recognition
```

### 2. Install Dependencies

- **Frontend:**

```bash
cd frontend
npm install
```

- **Backend:**

```bash
cd ../backend
npm install
```

- **Electron:**

```bash
cd ../electron
npm install
```

- **Main App:**

```bash
cd ..
npm install
```

### 3. Setup Environment Variables

- **Backend (`backend/.env`):**

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
DATA_BASE_PASSWARD=your_database_password
```

### 4. Run Development Servers

- **Electron App:**

```bash
npm start
```

---

## 📺 Build for Production

To build the full app as a standalone Electron application:

```bash
npm run build
npm run electron-pack
```

(You might use `electron-builder` or `electron-forge` for packaging.)

---

## 📋 TODOs

- Add notification system for attendance success/failure
- Add admin dashboard for managing users
- Add export reports feature (CSV/Excel)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🌟 Support

If you like this project, give it a ⭐ on GitHub!
