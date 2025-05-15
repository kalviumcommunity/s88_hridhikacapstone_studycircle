import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error("error in fetching the users",error.message);
        res.status(500).json({ message: error.message });
    }
}