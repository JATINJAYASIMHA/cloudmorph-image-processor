# CloudMorph ☁️✨

Transform and optimize images instantly using cloud computing.

---

# 🌐 Live Demo

### 🔗 Hosted Application
https://cloudmorph-app.web.app

### 🔗 Firebase Console
https://console.firebase.google.com/project/cloudmorph-app/overview

---

# 📌 Project Overview

CloudMorph is a modern cloud-based image optimization platform that allows users to:

- Upload images
- Automatically optimize and compress images
- Resize images dynamically
- Compare original vs optimized images
- Download optimized images

The project demonstrates cloud-hosted image processing using modern frontend and cloud technologies.

---

# 🚀 Features

✅ Cloud-based image upload  
✅ Automatic image optimization  
✅ Dynamic image resizing  
✅ Before vs After comparison  
✅ Download optimized images  
✅ Responsive modern UI  
✅ Cloud-hosted deployment  

---

# 🛠️ Technologies Used

## Frontend
- React.js
- Axios
- CSS-in-JS Styling

## Cloud Services
- Cloudinary
- Firebase Hosting

---

# ☁️ AWS vs Current Implementation

Originally, the project was planned using a full AWS serverless architecture.

However, due to native dependency/runtime compatibility issues with AWS Lambda image processing, the implementation was optimized using Cloudinary for reliable cloud image transformations.

## 🔄 Service Mapping

| Intended AWS Service | Used Instead | Purpose |
|---|---|---|
| Amazon S3 | Cloudinary | Image Storage |
| AWS Lambda + Sharp | Cloudinary Transformations | Image Processing |
| AWS Amplify | Firebase Hosting | Frontend Deployment |
| CloudWatch | Cloudinary Dashboard | Monitoring Uploads |

---

# 🏗️ System Architecture

```text
User Uploads Image
        ↓
React Frontend
        ↓
Cloudinary API
        ↓
Cloud-Based Image Processing
        ↓
Optimized Image Generated
        ↓
Firebase Hosting Displays Result
```

---

# 📷 Image Processing Operations

CloudMorph performs:

- Image resizing
- Automatic quality optimization
- Format optimization
- Cloud delivery optimization

Example transformation used:

```text
/upload/w_300,h_300,q_auto,f_auto/
```

---

# 📂 Project Structure

```text
aws-image-processor/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── backend/
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/cloudmorph-image-processor.git
```

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm start
```

---

# 🔥 Firebase Deployment

## Build Project

```bash
npm run build
```

## Deploy to Firebase

```bash
firebase deploy
```

---

# 📸 Screenshots

- Modern glassmorphism UI
- Before vs After comparison
- Cloud optimized image delivery

(Add screenshots here later)

---

# 🎯 Learning Outcomes

This project demonstrates:

- Cloud Computing Concepts
- Cloud-Based Media Optimization
- Frontend Deployment
- API Integration
- Cloud Image Processing
- Responsive UI Design
- Real-Time Cloud Delivery

---

# 📈 Future Enhancements

- AI-powered image enhancement
- Authentication system
- User dashboard
- Image history tracking
- Multiple image uploads
- Drag-and-drop support
- Video optimization

---

# 👨‍💻 Developed By

Jathin V N

---

# 📜 License

This project is developed for educational and academic purposes.
