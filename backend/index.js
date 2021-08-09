import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import movieRouter from "./router/movie.js";
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const D_URL = process.env.D_URL;

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

// Router
app.use("/api", movieRouter);

// connection database
mongoose
  .connect(D_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection successfull"))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
