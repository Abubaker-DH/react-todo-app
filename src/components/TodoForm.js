import React, { useState, useEffect, useRef } from "react";

function TodoForm() {
  const [input, setInput] = useState(
    this.props.edit ? this.props.edit.value : ""
  );

  const inputRef = useEffect(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // create random ID & get the input
    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {this.props.edit ? (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Udate a todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
