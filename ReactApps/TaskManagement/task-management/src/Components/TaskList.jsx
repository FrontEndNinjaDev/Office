import React, { useState } from "react";

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [newTodo, setnewTodo] = useState({
    title: "",
    discription: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewTodo({ ...newTodo, [name]: value });
  };

  const addTodo = () => {
    if (isEditing) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === currentTodoId ? { ...todo, ...newTodo } : todo
        )
      );
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      setTodos((prev) => [...prev, { ...newTodo, id: Date.now() }]);
    }
    setnewTodo({ title: "", discription: "", status: "pending" });
  };

  const handleEdit = (id) => {
    const todoEdit = todos.find((todo) => todo.id === id);
    setnewTodo({
      title: todoEdit.title,
      discription: todoEdit.discription,
      status: todoEdit.status,
    });
    setIsEditing(true);
    setCurrentTodoId(id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="todo-form">
        <input
          type="text"
          name="title"
          placeholder="Title..."
          value={newTodo.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="discription"
          placeholder="Discription..."
          value={newTodo.discription}
          onChange={handleChange}
        />
        <select name="status" value={newTodo.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <h3>{todo.title}</h3>
            <h3>{todo.status}</h3>
            <p>{todo.discription}</p>

            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
