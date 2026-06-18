const User = require("../models/User");
const Transaction = require("../models/Transaction");

const getAllUsers = async (req, res) => {

    try {

        const users = await User.find()
            .select("-password");

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getStats = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalTransactions =
            await Transaction.countDocuments();

        const transactions =
            await Transaction.find();

        let totalMoneyTransferred = 0;

        transactions.forEach((transaction) => {

            totalMoneyTransferred +=
                transaction.amount;

        });

        res.status(200).json({
            totalUsers,
            totalTransactions,
            totalMoneyTransferred
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = { getAllUsers,getStats};