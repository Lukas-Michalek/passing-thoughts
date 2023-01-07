import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../../util/utilities'

export function AddThoughtForm(props) {

  const [text, setText] = useState('');

  // Using "assignment destructuration" {target} is the same as writing event.target
  
  const handleTextChange = (event) => {             // Event Handler

    setText(event.target.value);
    
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();   // this prevents the browser from performing its default behavior when a form is submitted => disabling submit button for now

    // Creating though object:

    const thought = {

      id: generateId(),
      text: {text}.text,
      expiresAt:getNewExpirationTime()

    };

    // alert(JSON.stringify({text}));
    // This function will let me print out the content of object
    // alert(JSON.stringify(thought, null, 4));
    
    
    // If user typed soemthing the thought will be created, otherwise nothing happens
    if (text){
      props.addThought(thought);
      setText('');
    }
  
  };

  return (
    <form 
      className="AddThoughtForm"
      onSubmit = {handleSubmit}>    {/* Event Listener */}


      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange = {handleTextChange}
        
      />
      
      <input type="submit" value="Add" />
    </form>
  );
}
