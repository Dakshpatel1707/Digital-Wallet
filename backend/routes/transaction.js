const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {sendMoney,getTransactionHistory} = require("../controllers/transactionController");

router.post(
    "/send",
    verifyToken,
    sendMoney
);

router.get(
    "/history",
    verifyToken,
    getTransactionHistory
);

module.exports = router;