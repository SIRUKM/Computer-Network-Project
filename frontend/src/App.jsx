import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoClick = (id) => {
    // Find the clicked todo in the todos array
    const updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        // Toggle the completed status
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    // Update the todos state with the updatedTodos array
    setTodos(updatedTodos);
  };

  useEffect(() => {
    // Fetch todos data when component mounts
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div>
      <CreateTodo />
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px",
        }}
      >
        TODO
      </h1>
      <Todos todos={todos} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
