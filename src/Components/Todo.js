import React, { useState, useRef } from 'react'; // imported useRef to directly referenece a DOM element

const Todo = React.memo(({ todo, todos, setTodos, id }) => { // We use React.memo to prevent unnecessary re renders if the todo hasn't changed
  const [edit, setEdit] = useState(false); // edit tracks if we are editing the todo
  const inputEditRef = useRef(null); // inputEditRef allows us to focus on the input box when editing

  const onEdit = () => {
    setEdit(true);
    setTimeout(() => {
      inputEditRef.current?.focus();
    }, 0);
  }; //turns on edit mode and focuses the input using the ref

  const onSave = () => {
    setEdit(false);
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, name: inputEditRef.current.value } : item
    );
    setTodos(updatedTodos); // saved update the name in the list and turn off the edit mode
  }; 

  const onDelete = () => {
    setTodos(todos.filter((item) => item.id !== id));
  }; // delets the todo from the list

  const onComplete = () => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };// toggles the completion status

  return (
    <div className="todo-li">
      <li className={`li-list ${todo.completed ? 'completed' : ''}`}>
        {edit ? (
          <>
            <input
              className="li-input"
              defaultValue={todo.name}
              ref={inputEditRef}
            />
            <button className="button-save" onClick={onSave}>
              <span className="text-save">Save</span>
              <i className="fa fa-save"></i>
            </button>
          </>
        ) : (
          <>
            <input className="li-input" value={todo.name} readOnly />
            <button className="button-complete" onClick={onComplete}>
              <span className="text-complete">Complete</span>
              <i className="fa fa-check"></i>
            </button>
            <button className="button-edit" onClick={onEdit}>
              <span className="text-edit">Edit</span>
              <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete" onClick={onDelete}>
              <span className="text-delete">Delete</span>
              <i className="fa fa-trash"></i>
            </button>
          </> // if not editing show the todo with buttons to complete, edit and delete
        )}
      </li>
    </div>
  );
});

export default Todo;