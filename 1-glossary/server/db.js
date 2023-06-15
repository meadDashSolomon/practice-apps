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

const Glossary = mongoose.model('Glossary', glossarySchema);

// consider making and exporting a save function

// 3. Export the models
module.exports.Glossary = Glossary;
// 4. Import the models into any modules that need them
