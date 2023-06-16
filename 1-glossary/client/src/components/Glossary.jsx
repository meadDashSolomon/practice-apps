import React, { useState, useEffect } from 'react';

const Glossary = ({ onDisplayGlossary, onToggleModal }) => {

  return (
    <div className="glossaryContainer">
      <h4> Glossary List Component </h4>
      <ul>
        { onDisplayGlossary.map((entry) => {
          return (
            <li>
              { `Term: ${entry.term}......................Definition: ${entry.definition}` }
              <button> Delete </button>
              <button onClick={onToggleModal}> Edit </button>
            </li>
          )
        })}
      </ul>
    </div>);
}

export default Glossary;


