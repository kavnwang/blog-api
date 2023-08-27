const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

let corsOptions = {
  origin: [process.env.REQ_URL],
  optionsSuccessStatus: 200
}

const router = require("./routes/api");
const app = express();



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); 


mongoose.set("strictQuery",false);
const mongoDB = process.env.DB_URL;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.options('*', cors(corsOptions));
app.use("/", cors(corsOptions),router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;