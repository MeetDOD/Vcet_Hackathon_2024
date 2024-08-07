require("dotenv").config();

const CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
]

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/vcet_hack_2024";

const PORT = process.env.PORT || 5000;

module.exports = {
    CORS_ALLOWED_ORIGINS,
    MONGODB_URL,
    PORT
};