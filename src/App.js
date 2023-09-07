import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState([]);
  const [val, setVal] = useState("");
  function addHandler() {
    if (val !== "") {
      setTodo([...todo, val]);
      setVal("");
    }
  }
  function removehandler(index) {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button onClick={addHandler}>add todo</button>
      <ul>
        {todo.map((va, index) => (
          <div key={index}>
            <li>{va}</li>
            <button onClick={() => removehandler(index)}>remove todo</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
