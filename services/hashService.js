const bcrypt = require("bcryptjs");

// create a function to hash a plain password
exports.hashPassword = async (plainPassword) => {
  //   bcrypt.hash generates a hashed version of the password
  // the number 10 is the salt round, which affects the hashing complexity
  return await bcrypt.hash(plainPassword, 10);
};

// function to compare a plain password with a hashed password
exports.comparePassword = async (plainPassword, hashedPassword) => {
  // bcrypt.compare checks if the plain password matches the hashed one
  return await bcrypt.compare(plainPassword, hashedPassword);
};
