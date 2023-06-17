const { Glossary, deleteEntry } = require("../db.js");

module.exports = {
  delEntry: (req, res) => {
    const { _id } = req.body;
    deleteEntry(_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err)=> {
      res.status(500).send(err);
    })
  }
}