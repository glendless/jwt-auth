const jwt = require("jsonwebtoken");

// function to generate a JWT Token
exports.generateToken = (payload) => {
  // jwt.sign creates a signed token using our secret key from env variables
  // expiresIn defines how long the token is valid (1 hour here)
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};

// function to verify JWT
exports.verifyToken = (token) => {
  // jwt.verify checks if the token is valid and not expired
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
