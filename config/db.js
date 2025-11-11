// import mongoose
const mongoose = require("mongoose");

// connect to MongoDB using env variable
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connecting to MongoDB 🌏");
  } catch (error) {
    console.log("Error connecting to MongoDB: error.message");
    process.exit(1);
  }
};

module.exports = connectDB;
