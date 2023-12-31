const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// ** is the url correct? how do i create a database?
mongoose.connect('mongodb://localhost/glossaryDB', {useNewUrlParser: true, useUnifiedTopology: true});

// 2. Set up any schema and models needed by the app
const { Schema } = mongoose;

const glossarySchema = new Schema ({
  term: String,
  definition: String
})

let Glossary = mongoose.model('Glossary', glossarySchema);

// consider making and exporting a save function
let save = (term) => {
  console.log("REACHED SAVE FUNCTION W/ TERM::::::::", term);
  return Glossary.create(term);
}

let fetchTerms = () => {
  return Glossary.find({});
}

let update = (_id, term, definition) => {
  return Glossary.findOneAndUpdate(
    { _id },
    { term: term, definition: definition }
  )
  .then((updatedEntry => {
    console.log("ENTRY UPDATE SUCCESSFUL:::::::", updatedEntry);
  }))
  .catch(err => {
    console.log(err);
  })
}

let deleteEntry = (_id) => {
  return Glossary.findByIdAndDelete(_id)
  .then((deletedEntry) => {
    console.log("ENTRY DELETION SUCCESSFULL::::::", deletedEntry)
  })
  .catch((err) => {
    console.log(err);
  })
}

// 3. Export the models
module.exports = {
  Glossary: Glossary,
  save: save,
  fetchTerms: fetchTerms,
  update: update,
  deleteEntry: deleteEntry
};
// 4. Import the models into any modules that need them
