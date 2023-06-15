const { Glossary, save } = require("../db.js");

module.exports = {
  addTerm: (req, res) => {
    console.log("REACHED SEARCH FUNCTION:::::::", req.body);
    save(req.body);
  }
}