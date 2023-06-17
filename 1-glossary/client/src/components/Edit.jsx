import React, { useState, useEffect } from 'react';

const Modal = ({ showModal, toggleModal, onUpdateEntry, currentEdit }) => {

  if (!showModal) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('WHAT IS EEEEEE:::::::::', e)

    const term = e.target["0"].value;
    const definition = e.target["1"].value;

    onUpdateEntry(term, definition);
    toggleModal();
  }

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <h4>Edit Term and Definition</h4>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label >Term: </label>
            <input type="text" id="term" />
          </div>
            <label>Definition: </label>
            <input type="text" id="definition" />
          <div className="">
            <button type="submit"> Save </button>
            <button type="button" onClick={toggleModal}> Cancel </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal;




