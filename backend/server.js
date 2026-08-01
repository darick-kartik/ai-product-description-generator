const express = require("express");
const cors = require("cors");
require("dotenv").config();

const session = require("express-session");
const passport = require("passport");

const connectDB = require("./config/db");
require("./config/passport");

const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorMiddleware");

// Connect to MongoDB
connectDB();

const app = express();

/* ==========================
   CORS Configuration
========================== */

const allowedOrigins = [
  "http://localhost:5173", // Local Frontend
  process.env.CLIENT_URL,  // Production Frontend (Vercel)
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without origin (Postman, mobile apps, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/* ==========================
   Middleware
========================== */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* ==========================
   Routes
========================== */

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Product Description Generator Backend is Running 🚀",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);

// AI Routes
app.use("/api/ai", aiRoutes);

// Product Routes
app.use("/api/products", productRoutes);

/* ==========================
   404 Handler
========================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ==========================
   Error Handler
========================== */

app.use(errorHandler);

/* ==========================
   Start Server
========================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});