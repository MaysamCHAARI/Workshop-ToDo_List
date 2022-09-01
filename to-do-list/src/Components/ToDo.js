import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDo = ({ list, setList }) => {
  const handleDelete = (e) => {
    const name = e.target.getAttribute("name");
    setList(list.filter((elm) => elm.id !== name));
  };
  return (
    <div>
      {list.map((elm) => {
        return (
          <>
            <table
              style={{
                borderWidth: "2px",
                borderColor: "#aaaaaa",
                borderStyle: "solid",
              }}
            >
              <td>
                {elm.task} {elm.id}
              </td>
              <Button
                variant="warning"
                style={{ margin: "10px" }}
                onClick={handleDelete}
                name={elm.id}
              >
                Delete
              </Button>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default ToDo;
