import React,{useState} from "react";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";

function App() {
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <div className='header'>
        <h1>Todolist-App</h1>
        <div>
          <Form todos={todos} setTodos={setTodos} />
        </div>
        <div>
             <Todolist todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
