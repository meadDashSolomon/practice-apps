import React, { useState } from 'react';

const Search = ({ onSearch }) => {

  const[term, setTerm] = useState('');

  const onChange = (e) => {
    setTerm(e.target.value);
}

const search = () => {
  onSearch(term);
}

return (
  <div>
    <h4>Add more terms!</h4>
    Enter a word: <input value={term}
    onChange={onChange}/>
    <button onClick={search}> Add Terms </button>
  </div>
);
};

export default Search;