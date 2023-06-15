import React from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Dictionary from "./components/Dictionary.jsx";
import AddTerm from "./components/AddTerm.jsx";
import axios from "axios";

const App = () => {
  const addTerm = (term) => {
    axios.post('http://localhost:3000/def', {"term": term})
    .then(function (response) {
      console.log("RESPONSE:::::::", response);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>My Glossary</h1>
      <AddTerm onAddTerm={addTerm}/>
      {/* <Dictionary terms={terms}/> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));