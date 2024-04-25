const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
const calorieIntakeRoutes = require('./Routes/CalorieIntake');
const adminRoutes = require('./Routes/Admin');
//Image to image 
const imageUploadRoutes = require('./Routes/ImageUploadRoutes');
const sleepTrackRoutes = require('./Routes/SleepTrack');
const stepTrackRoutes = require('./Routes/StepTrack');
const weightTrackRoutes = require('./Routes/WeightTrack');
const waterTrackRoutes = require('./Routes/WaterTrack');
const workoutTrackRoutes = require('./Routes/WorkoutTrack');
const workoutRoutes = require('./Routes/WorkoutPlans');
const reportRoutes = require('./Routes/Report');


require('dotenv').config();
require('./db')

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000']; // Add more origins as needed

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);
app.use(cookieParser());


app.use('/auth', authRoutes);
app.use('/calorieintake', calorieIntakeRoutes);
app.use('/admin', adminRoutes);
app.use('/image-upload', imageUploadRoutes);
app.use('/sleeptrack', sleepTrackRoutes);
app.use('/steptrack', stepTrackRoutes);
app.use('/weighttrack', weightTrackRoutes);
app.use('/watertrack', waterTrackRoutes);
app.use('/workouttrack', workoutTrackRoutes);
app.use('/workoutplans', workoutRoutes);
app.use('/report', reportRoutes);
//
app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   exposedHeaders: ['Content-Type', 'Authorization'],
//   maxAge: 3600,
//   preflightContinue: true,
//   optionsSuccessStatus: 200,
//   allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Root route
// app.get('/', (req, res) => {
//     res.send('Server is running');
// });
// // Routes
// const authRoutes = require('./Routes/Auth');
// const calorieIntakeRoutes = require('./Routes/CalorieIntake');
// const adminRoutes = require('./Routes/Admin');
// const imageUploadRoutes = require('./Routes/ImageUploadRoutes');
// const sleepTrackRoutes = require('./Routes/SleepTrack');
// const stepTrackRoutes = require('./Routes/StepTrack');
// const weightTrackRoutes = require('./Routes/WeightTrack');
// const waterTrackRoutes = require('./Routes/WaterTrack');
// const workoutTrackRoutes = require('./Routes/WorkoutTrack');
// const workoutRoutes = require('./Routes/WorkoutPlans');
// const reportRoutes = require('./Routes/Report');

// app.use('/auth', authRoutes);
// app.use('/calorieintake', calorieIntakeRoutes);
// app.use('/admin', adminRoutes);
// app.use('/image-upload', imageUploadRoutes);
// app.use('/sleeptrack', sleepTrackRoutes);
// app.use('/steptrack', stepTrackRoutes);
// app.use('/weighttrack', weightTrackRoutes);
// app.use('/watertrack', waterTrackRoutes);
// app.use('/workouttrack', workoutTrackRoutes);
// app.use('/workoutplans', workoutRoutes);
// app.use('/report', reportRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL, {
//   dbName: process.env.DB_NAME,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to database');
// }).catch((err) => {
//   console.log('Error connecting to database: ', err);
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// require('dotenv').config();
// ///mongoose.connect(uri, { bu
// const app = express();
// const PORT = process.env.PORT || 7800;


// const authRoutes = require('./Routes/Auth');
// const calorieIntakeRoutes = require('./Routes/CalorieIntake');
// const adminRoutes = require('./Routes/Admin');
// const imageUploadRoutes = require('./Routes/imageUploadRoutes');
// const sleepTrackRoutes = require('./Routes/SleepTrack');
// const stepTrackRoutes = require('./Routes/StepTrack');
// const weightTrackRoutes = require('./Routes/WeightTrack');
// const waterTrackRoutes = require('./Routes/WaterTrack');
// const workoutTrackRoutes = require('./Routes/WorkoutTrack');
// const workoutRoutes = require('./Routes/WorkoutPlans');
// const reportRoutes = require('./Routes/Report');
// app.use(cors({
//       origin : 'http://localhost:5173',
//       credentials : true,
//       allowedHeaders : ['Content-Type','Authorization'],
//       exposedHeaders : ['Content-Type','Authorization'],
//       maxAge : 3600,
//       preflightContinue : true,
//       optionsSuccessStatus : 200,
//       allowedMethods : ['GET','POST','PUT','DELETE'],
      
// }));
// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL,{
//   dbName: process.env.DB_NAME
// }).then(
//   () => {
//       console.log('Connected to database');
//   }
// ).catch((err) => {
//   console.log('Error connecting to database ' + err);
// })

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start server


// // // Body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Cookie parser middleware
// app.use(cookieParser());
// app.use('/auth', authRoutes);
// app.use('/calorieintake', calorieIntakeRoutes);
// app.use('/admin', adminRoutes);
// app.use('/image-upload', imageUploadRoutes);
// app.use('/sleeptrack', sleepTrackRoutes);
// app.use('/steptrack', stepTrackRoutes);
// app.use('/weighttrack', weightTrackRoutes);
// app.use('/watertrack', waterTrackRoutes);
// app.use('/workouttrack', workoutTrackRoutes);
// app.use('/workoutplans', workoutRoutes);
// app.use('/report', reportRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
