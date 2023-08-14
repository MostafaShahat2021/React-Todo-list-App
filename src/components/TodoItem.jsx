/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import styles from "../styles/TodoItem.module.css";
// https://ibaslogic.com/persisting-react-state-in-local-storage/#the-web-storage-api
function TodoItem({ itemProp, setTodos, delTodo, setUpdate }) {
  //edit todo====================
  const [editing, setEditing] = useState(false);
  const handeleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  //edit todo end===================

  const handelChange = (id) => {
    // console.log('clicked', id);
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handelChange(itemProp.id)}
        />
        <button onClick={handeleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
      onKeyDown={handleUpdatedDone}
        style={editMode}
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        //edit todo
        //onChange={(e) => console.log(e.target.value, itemProp.id)}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      />
    </li>
  );
}

export default TodoItem;
