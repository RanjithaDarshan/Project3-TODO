import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

 
  const addTodo = () => {
    if (input.trim() === '') return; 
    setTodos([...todos, input]); 
    setInput(''); 
  };

  
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); 
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
