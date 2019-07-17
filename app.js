const { MONGO_DB_CONNECTION, NODE_ENV, PORT } = process.env;
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Database Connection
if (MONGO_DB_CONNECTION) {
  mongoose.connect(MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useFindAndModify: false
  });
  console.log("Connected to database...");
} else {
  console.log("Could not connect to database!");
}

// Application-level Middleware
if (NODE_ENV === "development") app.use(require("morgan")("dev"));
app.use(require("body-parser").json());

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
