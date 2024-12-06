const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const reviewRoutes = require('./routes/reviewRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", reviewRoutes)
app.use("/api", userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
