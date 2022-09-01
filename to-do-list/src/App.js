import "./App.css";
import { useState } from "react";
import List from "./Components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setList] = useState([
    { id: uuidv4(), task: "learn fullstack" },
    { id: uuidv4(), task: "travel to sfax" },
    { id: uuidv4(), task: "Design new article" },
  ]);

  // const [listup, updateList] = useState(list);

  const handleAdd = (val) => {
    setList([...list, val]);
  };

  return (
    <div className="App App-header">
      <List list={list} handleAdd={handleAdd} setList={setList} />
    </div>
  );
}

export default App;
