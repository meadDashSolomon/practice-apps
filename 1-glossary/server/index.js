require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
let routes = require("./routes.js");


// require statement to import Glossary

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use("/", routes);


app.listen(3000);
console.log(`Listening at http://localhost:3000`);
