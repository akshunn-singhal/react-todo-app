import { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(evt) {
    setInputValue(evt.target.value);
  }
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
