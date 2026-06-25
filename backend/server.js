const errorHandler = require("./middleware/errorMiddleware");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Product Description Generator Backend is Running 🚀",
  });
});

app.use("/api/products", productRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});