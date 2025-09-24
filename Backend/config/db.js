const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_LOCAL_URL}/doctorapp`);

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected");
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
