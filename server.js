const express = require("express");

// create an instance of express
const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// test start server
app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'>Your server is up and running</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
