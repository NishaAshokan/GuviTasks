const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
const calorieIntakeRoutes = require('./Routes/CalorieIntake');
const adminRoutes = require('./Routes/Admin');
const imageUploadRoutes = require('./Routes/imageUploadRoutes');
const sleepTrackRoutes = require('./Routes/SleepTrack');
const stepTrackRoutes = require('./Routes/StepTrack');
const weightTrackRoutes = require('./Routes/WeightTrack');
const waterTrackRoutes = require('./Routes/WaterTrack');
const workoutTrackRoutes = require('./Routes/WorkoutTrack');
const workoutRoutes = require('./Routes/WorkoutPlans');
const reportRoutes = require('./Routes/Report');

require('dotenv').config();
require('./db'); // Assuming this file sets up the MongoDB connection

app.use(bodyParser.json());

const allowedOrigins = [
    'https://added-uhvu.vercel.app',
    'https://add-admin-4xxl.vercel.app',
   'https://added-7qn1.vercel.app',
   'https://add-admine.vercel.app',
    'http://localhost:3001',
    'http://localhost:3000',
    'http://localhost:3002',
    'https://added-madhis-projects.vercel.app'
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
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

app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');

// dotenv.config();

// // Database connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Database connected successfully'))
//     .catch(err => console.error('Database connection error:', err));

// const app = express();
// const PORT = 8000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cookieParser());

// // CORS configuration
// const allowedOrigins = [
//     'https://add-admin.vercel.app',
//     'https://added.vercel.app',
//     'https://added-mp-madhis-projects.vercel.app',
//     'http://localhost:3001',
//     'http://localhost:3000',
//     'http://localhost:3002',
//     'https://added-madhis-projects.vercel.app'
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true
// }));

// // Logging middleware for debugging
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

// // Routes
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

// // Default route
// app.get('/', (req, res) => {
//     res.json({ message: 'The API is working' });
// });

// // Error handling
// app.use((req, res, next) => {
//     res.status(404).json({ message: 'Resource not found' });
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Internal server error' });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const PORT = 8000;
// const cookieParser = require('cookie-parser');

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


// require('dotenv').config();
// require('./db')

// app.use(bodyParser.json());
// // //const allowedOrigins = ['http://localhost:3000',  'https://fitnessproject-api.vercel.app/'];
// // const allowedOrigins = [ 'https://add-admin-mp.vercel.app', 'https://added-mp-madhis-projects.vercel.app',  'http://localhost:3001' , 'http://localhost:3000' , 'http://localhost:3002', 'https://added-madhis-projects.vercel.app' ]; // Add more origins as needed
// const allowedOrigins = [
//     'https://add-admin.vercel.app',
//     'https://added.vercel.app',
//     'https://added-mp-madhis-projects.vercel.app',
//     'http://localhost:3001',
//     'http://localhost:3000',
//     'http://localhost:3002',
//     'https://added-madhis-projects.vercel.app'
// ];
// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin || allowedOrigins.includes(origin)) {
//                 callback(null, true);
//             } else {
//                 callback(new Error('Not allowed by CORS'));
//             }
//         },
//         credentials: true, // Allow credentials
//     })
// );
// // const corsOptions = {
// //     origin: function (origin, callback) {
// //         if (allowedOrigins.includes(origin)) {
// //             callback(null, true);
// //         } else {
// //             callback(new Error('Not allowed by CORS'));
// //         }
// //     }
// // };

// // app.use(cors(corsOptions));
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


// app.get('/', (req, res) => {
//     res.json({ message: 'The API is working' });
// });


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


