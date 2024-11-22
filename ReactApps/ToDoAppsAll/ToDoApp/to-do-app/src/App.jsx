import  { useState } from 'react';
import './App.css';

function Todo() {
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

 
  const addTodo = () => {
    if (newTodo) {
        setTodos([...todos, newTodo]); 
        setNewTodo('');
    }
  };

  
  const removeTodo = (index) => {
    const updatedTodos = [...todos]; 
    updatedTodos.splice(index, 1);    
    setTodos(updatedTodos);           
  };
  return (
    <div className="App">
      <div className="box-container"></div>
      <h1>Todo App</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => removeTodo(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
