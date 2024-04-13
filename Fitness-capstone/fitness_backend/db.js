const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection options
const options = {
    bufferCommands: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 3000
};

// MongoDB connection string
const uri = process.env.MONGO_URL;

// Connect to MongoDB Atlas
mongoose.connect(uri, options)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err.message);
    });

// const mongoose = require('mongoose');

// // MongoDB connection string
// const uri = process.env.MONGO_URL; // Replace 'your-mongodb-uri' with your actual MongoDB connection string

// // Function to connect to MongoDB with retry
// function connectWithRetry() {
//     mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             console.log('Connected to MongoDB Atlas');
//         })
//         .catch((err) => {
//             console.error('Error connecting to database:', err.message);
//             // Retry connection after a delay
//             setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
//         });
// }

// // Start initial connection attempt
// connectWithRetry();
