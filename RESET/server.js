const express = require("express");
const { connectMongoDB } = require("./config/connection");

const userRouter = require("./routes/userRouter");

const forgetRouter = require("./routes/forgetRouter");
const authRouter = require("./routes/AuthRouter")
const cors = require('cors');
const app = express();
const PORT = 4300;


app.use(express.json());

app.use("/users", userRouter, authRouter, forgetRouter);

connectMongoDB("mongodb://localhost:27017/crud-test").then(() => {
  console.log("DB Connected!!!");
}).catch((err) => {
  console.log(`DB Connection Error: ${err.message}`);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});