const { Glossary, fetchTerms } = require("../db.js");

module.exports = {
  displayTerms: (req, res) => {
    fetchTerms()
    .then((termsAndDefinitions) => {
      console.log("REC'D TERMS AND DEFS??::::::", termsAndDefinitions)
      res.status(200).send(termsAndDefinitions);
    })
  }
}