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
  console.log("TERM::::::::", term);
  Glossary.create(term);
}

// 3. Export the models
module.exports = {
  Glossary: Glossary,
  save: save
};
// 4. Import the models into any modules that need them
