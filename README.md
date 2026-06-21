# 🧠 Internet Memory Bank
### Your Searchable Second Brain

Internet Memory Bank is an intelligent document storage and retrieval platform that helps users organize, search, and rediscover information from PDFs and images. It automatically extracts text using OCR, builds a knowledge graph, and provides powerful search capabilities to turn scattered files into a searchable memory system.

---

## 🚀 Problem Statement

People save important information in PDFs, screenshots, notes, and documents but often struggle to find it later.

Internet Memory Bank acts as a **personal knowledge repository**, allowing users to upload content, extract text automatically, and search through everything instantly.

---

## ✨ Features

### 📄 Document Upload
- Upload PDF documents
- Upload image files (PNG, JPG, JPEG)
- Drag & Drop file upload support

### 🔍 Smart Search
- Full-text search across uploaded content
- Instant search results
- Search preview snippets

### 💡 Auto Suggestions
- Real-time search suggestions while typing
- Faster content discovery

### 🖼 OCR (Optical Character Recognition)
- Extract text from uploaded images
- Search content hidden inside screenshots
- Powered by Tesseract.js

### 📊 Dashboard Analytics
- Total documents count
- Total PDFs count
- Total Images count

### 🕸 Knowledge Graph
- Automatically extracts important keywords
- Visualizes relationships between concepts
- Interactive graph using Vis Network

### 🕒 Memory Timeline
- View uploaded content chronologically
- Track your learning journey over time

### 📖 Memory Replay
- Revisit recently uploaded content
- Review your learning history from the past week

### ☁ Cloud Storage
- MongoDB Atlas integration
- Secure cloud-based data storage

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Libraries & Tools
- Multer
- PDF-Parse
- Tesseract.js
- Vis-Network
- CORS
- Dotenv

---

## 📂 Project Structure

```text
InternetMemoryBank/
│
├── models/
│   └── Document.js
│
├── routes/
│   ├── upload.js
│   ├── search.js
│   ├── suggest.js
│   ├── graph.js
│   ├── stats.js
│   ├── timeline.js
│   └── replay.js
│
├── utils/
│   └── stopWords.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── uploads/
├── .env
├── package.json
├── server.js
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/Pranathi-19/InternetMemoryBank.git
cd InternetMemoryBank
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

### Run Application

```bash
node server.js
```

Application runs at:

```text
http://localhost:3000
```

---

## 🎯 Use Cases

### Students
- Store lecture notes
- Search study materials instantly
- Organize screenshots and PDFs

### Job Seekers
- Save interview preparation material
- Store company hiring screenshots
- Search resumes and notes quickly

### Researchers
- Maintain a searchable repository of documents
- Visualize important concepts through graphs

### Professionals
- Organize reports and documents
- Create a personal knowledge management system

---

## 🔮 Future Enhancements

- AI-powered semantic search
- Document summarization
- Topic clustering
- Multi-user authentication
- Personalized recommendations
- AI chatbot for document queries

---

## 🌟 Why Internet Memory Bank?

Unlike traditional file storage systems, Internet Memory Bank focuses on:

- Knowledge retrieval
- OCR-based content discovery
- Concept visualization
- Learning history tracking
- Searchable personal memory

It transforms uploaded files into a searchable and intelligent knowledge repository.

---

## 👩‍💻 Developed For

Hackathon Project Submission

**Internet Memory Bank – Your Searchable Second Brain**
