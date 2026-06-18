const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const testRoutes = require("./routes/test");
const walletRoutes = require("./routes/wallet");
const transactionRoutes = require("./routes/transaction");
const adminRoutes = require("./routes/admin");
const cors = require("cors");




dotenv.config();

connectDB();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transaction",transactionRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Digital Wallet Backend Running");
});


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});