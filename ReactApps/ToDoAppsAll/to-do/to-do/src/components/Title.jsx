import { useState } from 'react'
import Todo from './todo';

function Title() {
  const [title, setTitle] = useState([]);
  const [newTitle, setNewTitle] = useState('');

 
  const addTitle = () => {
    if (newTitle) {
        setTitle([...title, newTitle]); 
        setNewTitle('');
    }
  };

  
  const removeTitle = (index) => {
    const updatedTitle = [...title]; 
    updatedTitle.splice(index, 1);    
    setTitle(updatedTitle);           
  };


  return (
    <div className="App">
    <div className="box-container">
    <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
         <button onClick={addTitle}>Add Title</button>
         </div>

      <ul className="Title-list">
        {title.map((Title, index) => (
          <li key={index} className="Title-item">
            {Title}
            <button onClick={() => removeTitle(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Todo/>
      </div>
      </div>
      
  );
}

export default Title
