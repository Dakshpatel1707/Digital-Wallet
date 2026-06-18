const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const adminMiddleware = require("../middleware/adminMiddleware");

const {getAllUsers,getStats} = require("../controllers/adminController");


router.get(
    "/users",
    verifyToken,
    adminMiddleware,
    getAllUsers
);

router.get(
    "/stats",
    verifyToken,
    adminMiddleware,
    getStats
)

module.exports = router;