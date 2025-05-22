import User from '../models/user.model.js';

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in fetching the users", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; 
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

