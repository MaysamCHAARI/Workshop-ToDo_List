import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ list, handleAdd }) => {
  const [input, setInput] = useState({ id: uuidv4(), task: "" });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    handleAdd(input);
    setInput({ id: uuidv4(), task: "" });
  };
  return (
    <div>
      <input
        name="task"
        onChange={handleChange}
        placeholder="put your task"
        style={{ padding: "10px", margin: "10px" }}
      />
      <Button variant="primary" onClick={handleSave}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
