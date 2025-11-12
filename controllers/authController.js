const User = require("../models/User");

const { hashPassword, comparePassword } = require("../services/hashService");
const { generateToken } = require("../services/jwtService");

// register new user
exports.register = async (req, res) => {
  try {
    //   get user input
    const { username, email, password } = req.body;

    // step 1. check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // step 2. hash password
    const hashedPassword = await hashPassword(password);

    // step 3. save user to db
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login user
exports.login = async (req, res) => {
  try {
    // get user input
    const { email, password } = req.body;

    // step 1. find user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // step 2. compare provided password with hashed password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // step 3. generate JWT using jwtService
    const token = generateToken({ id: user._id, email: user.email });

    // step 4. send success response with token
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.profile = (req, res) => {
  // res.user is set by auth middleware after token verification
  res.json({
    message: `Welcome ${name} to your profile`,
    user: req.user,
  });
};

// this contains all logic related to authentication
