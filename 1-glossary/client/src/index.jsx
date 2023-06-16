import React, { useState, useEffect } from 'react';
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Glossary from "./components/Glossary.jsx";
import AddTerm from "./components/AddTerm.jsx";
import axios from "axios";

const App = () => {

  const [entries, setEntries] = useState([]);

  const addTerm = (term, definition) => {
    console.log(term, definition);
    axios.post('http://localhost:3000/def', { term: term, definition: definition })
    .then(() => {
      console.log("POST REQUEST SUCCESFUL, INVOKING GET REQ");
      displayGlossary();
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  const displayGlossary = () => {
    axios.get("http://localhost:3000/def")
    .then((response) => {
      console.log("GET RESPONSE.DATA:::::::", response.data);
      setEntries(response.data);
    })
    .catch(function(err) {
      console.log(err);
    })
    };

    useEffect(() => {
      displayGlossary()
    }, []);

  return (
    <div>
      <h1>My Glossary</h1>
      <AddTerm onAddTerm={addTerm}/>
      <Glossary onDisplayGlossary={entries}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));