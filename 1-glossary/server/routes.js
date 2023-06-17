let routes = require("express").Router();
let controller = require("./controllers/controllers.js");

routes.post("/def", controller.definition.addTerm)

routes.get("/def", controller.display.displayTerms)

routes.put("/def", controller.edit.updateEntry)

routes.delete("/def", controller.delete.delEntry)

module.exports = routes;