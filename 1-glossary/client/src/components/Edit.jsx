import React, { useState, useEffect } from 'react';

const Modal = ({ showModal, toggleModal }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <h4>Edit Term and Definition</h4>
        <form>
          <div className="">
            <label >Term: </label>
            <input type="text" id="term" />
          </div>
            <label>Definition: </label>
            <input type="text" id="definition" />
          <div className="">
            <button> Save </button>
            <button onClick={toggleModal}> Cancel </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal;