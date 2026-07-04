# 🚀 AI Product Description Generator

A modern AI-powered web application that generates professional product descriptions using a clean and responsive interface. The project follows a full-stack architecture with a React frontend, Express backend, and MongoDB Atlas database for persistent storage.

---

# ✨ Features

- 🤖 AI Product Description Generation
- 📝 Generate high-quality product descriptions
- 📂 Product History Management
- 🔍 Search Products
- ✏️ Update Product Details
- 🗑️ Delete Products
- 💾 Persistent MongoDB Atlas Storage
- 📱 Fully Responsive UI
- 🌙 Dark Theme Interface
- ⚡ RESTful API Architecture

---

# 🛠️ Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- Framer Motion
- Axios
- React Hot Toast
- Lucide React

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose ODM

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
AI-Product-Description-Generator
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

# 🗄️ Database Choice

This project uses **MongoDB Atlas** as the primary database.

### Why MongoDB?

- Flexible document-based schema
- Easy integration with Node.js
- Cloud-hosted free tier
- Scalable architecture
- Ideal for storing generated product descriptions

---

# 📊 Database Schema

The application stores product information in a single **Product** collection.

> **Schema Diagram**

Save your uploaded diagram in the repository (for example in an `assets` folder) and reference it here:

```md
![Database Schema](assets/W5_SchemaDiagram_TBI-26101240.png)
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

A sample configuration is available in:

```
backend/.env.example
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/darick-kartik/ai-product-description-generator.git
```

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| GET | /api/products/search?q= | Search products |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

---

# 🔮 Future Improvements

- AI API Integration
- User Authentication
- Product Categories
- Export to PDF
- Favorites
- Dashboard Analytics

---

# 👨‍💻 Author

**Kartik Chauhan**

Intern ID: **TBI-26101240**

Graphic Era University

---

# ⭐ Acknowledgement

Developed as part of the AI-Assisted Full Stack Web Development Internship.