import { useState } from "react";
import { useFormik } from "Formik";
import { ValidateSchema } from "../../schema/schemas";

const PChartList = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prev) => [...prev, { ...newTodo, id: Date.now() }]);
  };

  const deleteTodo = (id) => setTodo(todo.filter((todo) => todo.id !== id));

  const initialValues = {
    name: "",
    age: "",
    pMonth: "",
    discription: "",
  };

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ValidateSchema,
      onSubmit: (values,action) => {
        // console.log("🚀 ~ file: PChartList.jsx:37 ~ PChartList ~ values:", values)
        addTodo(values);
        action.resetForm();
      },
    });

  console.log("🚀 ~ file: PChartList.jsx:32 ~ PChartList ~ errors:", errors);

  return (
    <div className="box">
      <div className="table">
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <label>Age</label>
          </td>
          <td>
            <label>Pregnancy-Month</label>
          </td>
          <td>
            <label>Discription</label>
          </td>
        </tr>
      </div>

      <form className="box-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name..."
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.name && touched.name ? (
          <p style={{ color: "red" }}>{errors.name}</p>
        ) : null}

        <input
          type="text"
          name="age"
          placeholder="Enter Age..."
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}

        />
        {errors.age && touched.age? (
          <p style={{ color: "red" }}>{errors.age}</p>
        ) : null}

        <input
          type="text"
          name="pMonth"
          placeholder="Enter PMonth..."
          value={values.pMonth}
          onChange={handleChange}
          onBlur={handleBlur}

        />
        {errors.pMonth && touched.pMonth? (
          <p style={{ color: "red" }}>{errors.pMonth}</p>
        ) : null}

        <input
          type="text"
          name="discription"
          placeholder="Enter Discription..."
          value={values.discription}
          onChange={handleChange}
          onBlur={handleBlur}

        />
        {errors.discription && touched.discription? (
          <p style={{ color: "red" }}>{errors.discription}</p>
        ) : null}

        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todo.map((todos) => (
          <div key={todos.id} className="todo-item">
            <h3>{todos.name}</h3>
            <h3>{todos.age}</h3>
            <h3>{todos.pMonth}</h3>
            <h3>{todos.discription}</h3>
            <button onClick={() => deleteTodo(todos.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PChartList;
