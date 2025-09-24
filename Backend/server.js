const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>First Server running on port ${PORT}</h1>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
