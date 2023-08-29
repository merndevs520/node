import express from "express";
import colors from "colors";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";

import cors from "cors";

dotenv.config();

const app = express();

// socket connection

//

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the path to your views directory (where your EJS templates will be located)
app.set("views", path.join(__dirname, "views"));
// environment vars
const PORT = process.env.PORT || 5050;

// set static

app.use(express.static("public"));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`server was running on port ${PORT}`.bgBlue);
  mongoDBConnect();
});
