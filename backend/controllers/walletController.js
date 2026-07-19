const User = require("../models/User");

const getBalance = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ name: user.name, balance: user.walletBalance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addMoney = async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || amount <= 0)
      return res.status(400).json({ message: "Enter a valid amount" });
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.walletBalance += Number(amount);
    await user.save();
    res.status(200).json({ message: `₹${amount} added successfully`, balance: user.walletBalance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBalance, addMoney };
