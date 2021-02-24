import React from "react";

const Form = ({ setInputText, todos, setTodo, inputText, setStatus }) => {
  const inputTextHandler = (ev) => {
    console.log(ev.target.value);
    setInputText(ev.target.value);
  };
  const submitTodoHandler = (ev) => {
    ev.preventDefault();
    setTodo([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000 + 1),
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todo" className="filter-todo">
          <option value="all">ALL</option>
          <option value="complited">COMPLITED</option>
          <option value="uncompleted">UNCOMPLITED</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
