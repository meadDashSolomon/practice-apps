const { Glossary, fetchTerms } = require("../db.js");

module.exports = {
  displayTerms: (req, res) => {
    fetchTerms()
    .then((termsAndDefinitions) => {
      console.log("DISPLAY CONTROLLER REC'D TERMS AND DEFS FROM GET REQ::::::", termsAndDefinitions)
      res.status(200).send(termsAndDefinitions);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}