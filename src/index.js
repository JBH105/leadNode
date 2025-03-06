const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const leadRoutes = require("./features/router/leadRoutes");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use("/api", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));