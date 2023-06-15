let routes = require("express").Router();
let controller = require("./controllers/controllers.js");

routes.post("/def", controller.definition.addTerm)

routes.get("/def", controller.display.displayTerms)

module.exports = routes;