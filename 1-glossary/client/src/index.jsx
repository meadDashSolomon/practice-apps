import React from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Glossary from "./components/Glossary.jsx";
import AddTerm from "./components/AddTerm.jsx";
import axios from "axios";

const App = () => {
  const addTerm = (term, definition) => {
    console.log(term, definition);
    axios.post('http://localhost:3000/def', { term: term, definition: definition })
    .then(function (response) {
      console.log("POST RESPONSE:::::::", response);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  const displayGlossary = () => {
    axios.get("http://localhost:3000/def")
    .then((response) => {
      console.log("GET RESPONSE:::::::", response);
    })
    .catch(function(err) {
      console.log(err);
    })
    };


  return (
    <div>
      <h1>My Glossary</h1>
      <AddTerm onAddTerm={addTerm}/>
      {/* <Glossary onDisplayGlossary={displayGlossary}/> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));