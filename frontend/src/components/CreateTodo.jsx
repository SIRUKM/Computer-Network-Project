import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputStyle = {
    display: "flex",
    padding: "8px",
    marginRight: "10px",
    marginTop: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    margin: "10px",
    borderRadius: "5px",
    padding: "8px 16px",
    cursor: "pointer",
  };

  const handleSubmit = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to add todo");
      })
      .then(() => {
        alert("Todo added");
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo");
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle}>
        Add Todo
      </button>
    </div>
  );
}
