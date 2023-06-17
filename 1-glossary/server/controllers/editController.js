const { Glossary, update } = require("../db.js");

module.exports = {
  updateEntry: (req, res) => {
    console.log("REACHED UPDATE ENTRY FUNC:::::", req.body);
    update(req.body._id, req.body.term, req.body.definition)
    .then((updatedEntry) => {
      console.log("EDIT CONTROLLER REC'D UPDATED ENTRY FROM DB::::::", updatedEntry)
      res.status(200).send(updatedEntry);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}