const bcrypt = require("bcrypt");

const User = require("../models/User");

// Creamos los salts de bcrypt
const saltRounds = 10;

async function registerUser(req, res) {
  try {
    const userAlreadyExists = await User.findOne({ email: req.body.email });

    if (userAlreadyExists) {
      const err = new Error("USER_ALREADY_REGISTERED");
      return res.json({ error: err.message });
    }

    const hash = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
      contactName: req.body.contactName,
      contactEmail: req.body.contactEmail,
      contactPhone: req.body.contactMobile,
      insurance: req.body.insurance,
      allergies: req.body.allergies,
    });

    const savedUser = await newUser.save();

    // console.log(savedUser);
    res.json(savedUser);
  } catch (err) {
    res.json({ error: err.message });
  }
}

async function listUsers(req, res) {
  try {
    const results = await User.find();
    res.json({ results: results });
  } catch (err) {
    res.json({ saved: false });
  }
}

module.exports = {
  registerUser,
  listUsers,
};
