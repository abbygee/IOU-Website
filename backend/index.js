const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const user = require("./routes/user");
const dashboard = require("./routes/dashboard");
const group = require("./routes/group");

// Initiate Mongo Server
const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

const app = express();
app.use(cors());app.use(express.json())

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 */
app.use("/user", user);

/**
 * Router Middleware
 * Router - /dashboard/*
 */
app.use("/dashboard", dashboard);

/**
 * Router Middleware
 * Router - /dashboard/*
 */
 app.use("/group", group);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});