const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const Snippet = require("./models/Snippet");
const app = express();
const apiRouter = require("./api-router");

app.use(cors());
dotenv.config();
app.use(express.json());
connectDb();
app.use("/api", apiRouter);

app.get("/health", (req, res) => {
  res.send("<h1>Server up and running!</h1>");
});

app.listen(5000, () => {
  console.log(`server started`);
});
