// step 1. load environment variable from .env
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

// create an instance of express
const app = express();

// step 2. connect to mongoDB
connectDB();

// step 3. middleware to parse JSON request bodies
app.use(express.json());

// step 4. mounth auth routes
// all auth-related routes will start with /api/auth
app.use("/api/auth", require("./routes/auth"));

// step 5. default router to test start server
app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Your server is up and running</h1><br><h2 style='text-align: center'>happy codding🚀</h2>"
  );
});

// step 6. start server on PORT from env or default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
