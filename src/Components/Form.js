import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
// uuid generates a unique ID for each todo item

const Form = React.memo(({ todos, setTodos }) => {
  const [input, setInput] = useState('');
  // we recieved todos and setTodos from the parent
  // input is a local state to track the value typed in the text box

  const onChange = (e) => {
    setInput(e.target.value);
  }; // updates input whenever the user types something

  const onSubmit = (e) => {
    e.preventDefault(); // prevents page refresh when submitting thr form
    if (input.trim() !== '') {
      setTodos([...todos, { name: input, completed: false, id: uuid() }]);
      setInput(''); // adds new todo to the list and resets the input field
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Enter a todo"
        autoComplete="off"
        value={input}
        onChange={onChange}
      />
      <button className="form-button" type="submit">
        Add
      </button>
    </form>
  ); // renders the input field and the btn. When the btn is clicked a new todo is added
});

export default Form;