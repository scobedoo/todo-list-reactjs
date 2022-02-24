import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, currentTodo, setCurrentTodo }) => {
  const COLORS = ["#1282FF", "#FD5911", "#7008FB", "#FC03B4"];

  const getColor = (index) => {
    if (index % 4 === 0) {
      return COLORS[0];
    } else if (index % 4 === 1) {
      return COLORS[1];
    } else if (index % 4 === 2) {
      return COLORS[2];
    } else {
      return COLORS[3];
    }
  };
  return (
    <div className="max-w-xl mx-auto mt-8">
      <ul className="space-y-3">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            backgroundColor={getColor(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
