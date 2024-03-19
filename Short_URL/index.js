const express = require("express");
const { connectToMongoDB } = require('./connect')
const urlRoute = require("./routes/url")
const app = express();

const port = 4005 ;

connectToMongoDB("mongodb://localhost:27017/shortURL").then(() => console.log("mongodb connected") )

app.use(express.json());

app.use("/url", urlRoute);

app.listen(port, () => console.log(`server started at ${port}`));