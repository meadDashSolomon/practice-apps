import React, { useState } from 'react';

const AddTerm = ({ onAddTerm }) => {

  const[term, setTerm] = useState('');
  const[definition, setDefiniton] = useState('');

  const onTermChange = (e) => {
    setTerm(e.target.value);
  }

  const onDefinitionChange = (e) => {
    setDefiniton(e.target.value);
  }

  const addTerm = () => {
    onAddTerm(term, definition);
  }

  return (
    <div>
      <h4>Add more terms!</h4>
      Enter a word: <input value={term}
      onChange={onTermChange}/>
      Enter a corresponding definition: <input value={definition}
      onChange={onDefinitionChange}/>
      <button onClick={addTerm}> Add Term with definition </button>
    </div>
  );
};

export default AddTerm;