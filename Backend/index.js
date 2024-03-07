const mentorRouter = require('./Routers/MentorRouter')
const studentRouter = require('./Routers/StudentRouter')

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */

app.use(express.json());  

const PORT = process.env.PORT || 4100;
// const URL = process.env.MONGODB_URL || "mongodb://localhost:27017/Zenclass_db" ;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Zenclass_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});




app.get('/',(req,res) => {
res.send("Working fine...");
}
);

app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))