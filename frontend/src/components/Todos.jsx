export function Todos({ todos, onTodoClick }) {
  const handleTodoClick = (id) => {
    // Call the onTodoClick function from props
    onTodoClick(id);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {todos.map(function (todo) {
        return (
          <div key={todo._id} style={todoStyle}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => handleTodoClick(todo._id)}
              style={buttonStyle}
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

// Define inline styles
const todoStyle = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",
  width: "100%",
  maxWidth: "600px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background-color 0.2s ease-in-out",
};

export default Todos;
