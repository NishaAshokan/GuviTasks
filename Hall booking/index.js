const express = require("express");
const cors = require('cors');

const dotenv = require('dotenv');

const roomRouter = require('./Routers/Room.js')
const customerRouter = require('./Routers/Customer.js')

const app = express();

// Dotenv configuration
dotenv.config();

// Middlewars
app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Hallbooking__db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// Application Routes
app.use('/room', roomRouter );
app.use('/customer', customerRouter )
const PORT = process.env.PORT || 4500
// server listening
app.listen(PORT, () => 
    console.log(`Server is running at http://localhost:${PORT}`)
);





