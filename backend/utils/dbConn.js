const mongoose = require('mongoose');
require('dotenv').config();


const connectToMongoDB = async (URL) => {
    try {
        const conn = await mongoose.connect(URL);
        console.log(`MongoDB Connected: ${conn.connection.host} 🚀`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectToMongoDB;