import { useState } from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
function Title() {
  const [title, setTitle] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const [disc, setDisc] = useState([]);
  const [newDisc, setNewDisc] = useState("");

  const addTitle = () => {
    if (newTitle) {
      setTitle([...title, newTitle]);
      setNewTitle("");
    }
  };

  const removeTitle = (index) => {
    const updatedTitle = [...title];
    updatedTitle.splice(index, 1);
    setTitle(updatedTitle);
  };

  const addTodos = () => {
    if (newTodos) {
      setTodos([...todos, newTodos]);
      setNewTodos("");
    }
  };

  const removeTodos = (index) => {
    const updatedTodos = [...title];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const addDisc = () => {
    if (newDisc) {
      setDisc([...disc, newDisc]);
      setNewDisc("");
    }
  };

  const removeDisc = (index) => {
    const updatedDisc = [...disc];
    updatedDisc.splice(index, 1);
    setDisc(updatedDisc);
  };

  return (
      <div className="box-container">
        <div className="input-container">
          <div className="input-title">
            <input
              type="text"
              placeholder="Enter A New Title..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input-title"
            />
            <button onClick={addTitle}>Add</button>
          </div>
          <div className="input-todo">
            <input
              type="text"
              placeholder="Enter A New Todo..."
              value={newTodos}
              onChange={(e) => setNewTodos(e.target.value)}
              className="input-todo"
            />
            <button onClick={addTodos}>Add</button>
          </div>

          <div className="input-disc">
            <input
              type="text"
              placeholder="Enter A New Discription..."
              value={newDisc}
              onChange={(e) => setNewDisc(e.target.value)}
              className="input-disc"
            />
            <button onClick={addDisc}>Add</button>
          </div>
        </div>

        <div className="title-box">
          <ul className="title-list">
            {title.map((Title, index) => (
              <li key={index} className="title-title">
                {Title}
                <button
                  onClick={() => removeTitle(index)}
                  className="delete-button"
                >
                 <DeleteSweepIcon fontSize="small"/>
                </button>
              </li>
            ))}
          </ul>

          <ul className="title-list">
            {todos.map((Todo, index) => (
              <li key={index} className="title-todo">
                {Todo}
                <button
                  onClick={() => removeTodos(index)}
                  className="delete-button"
                >
                <DeleteSweepIcon fontSize="small"/>
                </button>
              </li>
            ))}
          </ul>

          <ul className="title-list">
            {disc.map((Disc, index) => (
              <li key={index} className="title-disc">
                {Disc}
                <button
                  onClick={() => removeDisc(index)}
                  className="delete-button"
                >
                      <DeleteSweepIcon fontSize="small"/>
                </button>
              </li>
            ))}
          </ul>

          <input type="checkbox" id="checkbox" />
        </div>
      </div>
  );
}

export default Title;
