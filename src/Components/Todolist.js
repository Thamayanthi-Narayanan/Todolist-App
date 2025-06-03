import React from 'react';
import Todo from './Todo';

const Todolist = React.memo(({ todos, setTodos }) => {
  return (
    <div className="todo-ul">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          /> // loops through todos and renders each one with the todo component.
        ))}
      </ul>
    </div>
  );
});

export default Todolist;