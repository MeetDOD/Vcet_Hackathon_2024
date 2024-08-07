const express = require('express');
const connectToMongoDB = require('./utils/dbConn');
const cors = require('cors');
const {CORS_ALLOWED_ORIGINS, MONGODB_URL, PORT} = require('./utils/constants')

const corsConfig = {

    origin: CORS_ALLOWED_ORIGINS,
};



const app = express();



app.use(express.json());

app.use(cors(corsConfig));

const startServer = async () => {

    await connectToMongoDB(MONGODB_URL);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} 🚀`);
    });
};

startServer();