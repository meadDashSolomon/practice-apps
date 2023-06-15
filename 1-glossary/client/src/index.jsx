import React from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Dictionary from "./components/Dictionary.jsx";
import Search from "./components/Search.jsx";

const App = () => {
  const search = (term) => {
    // axios/ajax post request

  }

  return (
    <div>
      <h1>My Glossary</h1>
      <Search onSearch={search}/>
      {/* <Dictionary terms={terms}/> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));