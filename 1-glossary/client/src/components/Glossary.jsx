import React, { useState, useEffect } from 'react';

const Glossary = ({ onDisplayGlossary, onToggleModal, setCurrentEdit, onDelEntry }) => {

  const handleDeleteClick = (event) => {
    const termId = event.currentTarget.dataset.id;
    onDelEntry(termId);
  }

  return (
    <div className="glossaryContainer">
      <h4> Glossary List Component </h4>
      <ul>
        { onDisplayGlossary.map((entry) => {
          return (
            <li>
              { `Term: ${entry.term}......................Definition: ${entry.definition}` }
              <button data-id={entry._id} onClick={handleDeleteClick}> Delete </button>
              <button onClick={()=>{
                onToggleModal(entry._id);
              }}> Edit </button>
            </li>
          )
        })}
      </ul>
    </div>);
}

export default Glossary;


