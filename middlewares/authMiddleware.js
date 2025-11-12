const { verifyToken } = require("../services/jwtService");

// middleware to protect routes
module.exports = (req, res, next) => {
  // step 1. get authorization header
  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  // step 2. extract token from header 'bearer <token>'
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "malformed token" });

  try {
    // step 3. verify token using jwtService
    const decode = verifyToken(token);

    // step 4. attach decoded user info to request object
    req.user = decode;

    // step 5. call next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
