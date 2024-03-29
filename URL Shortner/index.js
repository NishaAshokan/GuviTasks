const express = require("express");
const path = require('path')
//const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const staticRoute = require('./routes/staticRouter');
const app = express();
const PORT = 8007;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/short-url', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
//   console.log("Mongodb connected")
// );
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());

app.use(express.urlencoded({ extended : false}))
// app.get("/test" , async  (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render('home', {
//     urls : allUrls,
//   })
//   //return res.end("<h1> HEY </h1>");
// });

app.use("/url", urlRoute);
app.use('/', staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
