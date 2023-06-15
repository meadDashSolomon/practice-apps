import React, { useState } from 'react';

const AddTerm = ({ onAddTerm }) => {

  const[term, setTerm] = useState('');

  const onChange = (e) => {
    setTerm(e.target.value);
}

const addTerm = () => {
  onAddTerm(term);
}

return (
  <div>
    <h4>Add more terms!</h4>
    Enter a word: <input value={term}
    onChange={onChange}/>
    <button onClick={addTerm}> Add Terms </button>
  </div>
);
};

export default AddTerm;