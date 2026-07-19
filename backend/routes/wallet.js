const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { getBalance, addMoney } = require("../controllers/walletController");

router.get("/balance", verifyToken, getBalance);
router.post("/add", verifyToken, addMoney);

module.exports = router;
