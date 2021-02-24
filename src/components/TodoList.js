import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodo, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          setTodo={setTodo}
          todos={todos}
          todo={todo}
          text={todo.text}
        />
      ))}
    </div>
  );
};

export default TodoList;
