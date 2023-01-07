import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  // Dependency array is set ot though what means that every time new though will be created, REACT will render useEffect again and so the countdown for that thought will begin
  
  useEffect( () => {

    
    const timeRemaining = thought.expiresAt - Date.now(); 
    
    const timeOutID = setTimeout( () => {
      removeThought(thought.id)     
    }, timeRemaining);

    return () => {
      clearTimeout(timeOutID);
    };

  }, [thought])

  
    

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
