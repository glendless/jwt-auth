const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// step 1. register route
// user send their name, email, and password to this endpoint
router.post("/register", authController.register);

// step 2. login route
// user send their email and password to receive JWT
router.post("/login", authController.login);

// step 3. protected profile route
// only accessible to authenticated users with a valid JWT
router.get("/profile", authMiddleware, authController.profile);

module.exports = router;
