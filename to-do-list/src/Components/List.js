import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AddTask from "./AddTask";
import Button from "react-bootstrap/Button";
import ToDo from "./ToDo";
const List = ({ list, handleAdd, setList }) => {
  return (
    <div>
      <h1>To Do List</h1>
      <br></br>

      <ToDo list={list} setList={setList} />

      <AddTask list={list} handleAdd={handleAdd} />

      <br></br>
    </div>
  );
};

export default List;
