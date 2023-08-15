/* eslint-disable react/prop-types */
import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const handelChange = (e) => {
    setTitle(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setMsg("");
      setTitle("");
    } else {
      setMsg("Please add Item!");
    }
  };
  return (
    <>
      <form onSubmit={handelSubmit} className="form-container">
        <input
        className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handelChange}
        />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">
        {msg}
      </span>
    </>
  );
};
export default InputTodo;
