import React, { useState, useEffect } from 'react';
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Glossary from "./components/Glossary.jsx";
import AddTerm from "./components/AddTerm.jsx";
import axios from "axios";
import Modal from "./components/Edit.jsx"
import Search from "./components/Search.jsx"

const App = () => {

  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = (_id) => {
    setShowModal(!showModal);
    setCurrentEdit(_id);
    console.log("ID::::::::::", _id)
  }

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

  const updateEntry = (term, definition) => {
    var _id = currentEdit;

    axios.put("http://localhost:3000/def", { term, definition, _id })
    .then(() => {
      displayGlossary();
    })
    .catch((err) => {
      console.log(err);
    })
  }

    const delEntry = (termId) => {
      axios.delete("http://localhost:3000/def", { data: { _id: termId } })
      .then(() => {
        displayGlossary();
      })
      .catch((err) => {
        console.log(err);
      })
    }

    const filterEntries = (entries, query) => {
      if (!query) {
        return entries;
      }
      return entries.filter((entry) =>
        entry.term.toLowerCase().includes(query.toLowerCase())
      );
    };

  return (
    <div>
      <h1>My Glossary</h1>
      <AddTerm onAddTerm={addTerm}/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Glossary onDisplayGlossary={filterEntries(entries, searchQuery)} onToggleModal={toggleModal} setCurrentEdit={setCurrentEdit} onDelEntry={delEntry}/>
      <Modal showModal={showModal} toggleModal={toggleModal} onUpdateEntry={updateEntry} currentEdit={currentEdit}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));