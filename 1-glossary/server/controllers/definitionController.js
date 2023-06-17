const { Glossary, save } = require("../db.js");

module.exports = {
  addTerm: (req, res) => {
    console.log("REACHED ADD TERM FUNCTION W/ REQ.BODY:::::::", req.body);
    save(req.body)
    .then(() => {
      res.status(200).send("TERM SAVED");
    })
    .catch((err) => {
      console.log(err);
    })
  }
}