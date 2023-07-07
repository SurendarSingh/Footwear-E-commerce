//jshint esversion:6

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("MongoDB Connected successfully");
});


// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes Middleware
app.use("/user", authRoutes);
app.use("/", homeRoutes);


app.listen(process.env.PORT, function() {
    console.log(`Server started on port ${process.env.PORT}`);
});
