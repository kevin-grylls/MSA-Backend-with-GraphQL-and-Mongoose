const config = require("./database");
const env = require("express")().get("env");
const mongo = config.mongo[env];
const mongoose = require("mongoose");

mongoose
  .connect(mongo.url || "mongodb://localhost:27017", mongo.option)
  .then(
    () => console.log("[", new Date(), "]", "Mongo Connection: OK"),
    err => console.error("[", new Date(), "]", "Mongo Connection: Error")
  );

module.exports = mongoose;
