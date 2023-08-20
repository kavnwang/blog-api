const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const router = require("./routes/api");
const path = require('path');


const app = express();
/*

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); */

app.use("/", router);

mongoose.set("strictQuery",false);
const mongoDB = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

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