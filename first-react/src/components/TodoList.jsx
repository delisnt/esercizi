import { useEffect, useRef, useState } from "react";

function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  function handleTodoListInput() {
    if (inputRef.current.value){
        setList((l) => [...l, inputRef.current.value]);
    }
    setInput('')
  }

  function handleResetBtn() {
    setList(() => []);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleRemoveBtn(index) {
    setList((l) => {
      const filterArr = l.filter((item, i) => {
        return i !== index;
      });
      return filterArr;
    });
  }
  

  useEffect(() => {
    if (!list.length) {
      console.log("list is empty");
    }
  }, [list]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Create a new task"
        onChange={handleInputChange}
        value={input}
      />
      <button onClick={handleTodoListInput}>Add a task</button>{" "}
      <button onClick={handleResetBtn}>RESET</button>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}
          <button onClick={() => handleRemoveBtn(index)}>Remove Task</button>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
