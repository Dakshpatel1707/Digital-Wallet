const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {getBalance} = require("../controllers/walletController");

router.get("/balance", verifyToken, getBalance);

module.exports = router;