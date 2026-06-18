const User = require("../models/User");
const Transaction = require("../models/Transaction");

const sendMoney = async (req, res) => {

    try {

        const { receiverEmail, amount } = req.body;

        const senderId = req.user.id;

        const sender = await User.findById(senderId);

        const receiver = await User.findOne({
            email: receiverEmail
        });

        if (!receiver) {
            return res.status(404).json({
                message: "Receiver not found"
            });
        }

        if (sender.email === receiver.email) {
            return res.status(400).json({
                message: "Cannot send money to yourself"
            });
        }

        if (sender.walletBalance < amount) {
            return res.status(400).json({
                message: "Insufficient Balance"
            });
        }

        sender.walletBalance -= amount;

        receiver.walletBalance += amount;

        await sender.save();

        await receiver.save();

        const transaction = new Transaction({
            sender: sender._id,
            receiver: receiver._id,
            amount
        });

        await transaction.save();

        res.status(200).json({
            message: "Money Sent Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


const getTransactionHistory = async (req, res) => {

    try {

        const userId = req.user.id;

        const transactions = await Transaction.find({
            $or: [
                { sender: userId },
                { receiver: userId }
            ]
        })
        .populate("sender", "name email")
        .populate("receiver", "name email")
        .sort({ createdAt: -1 });

        res.status(200).json(transactions);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = { sendMoney,getTransactionHistory };