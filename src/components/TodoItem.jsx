import React from "react";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";

const TodoItem = ({
  todo,
  todos,
  setTodos,
  setCurrentTodo,
  backgroundColor,
}) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`py-4 px-5 rounded-lg flex mx-auto justify-between ${
        todo.isCompleted ? "opacity-50" : ""
      }`}
    >
      <div>
        <li className={`text-lg ${todo.isCompleted ? "line-through" : ""}`}>
          {todo.text}
        </li>
      </div>
      <div className="space-x-5">
        <button>
          <BiEdit onClick={() => setCurrentTodo(todo)} />
        </button>
        <button onClick={handleDelete}>
          <BiTrash />
        </button>
        <button onClick={handleComplete}>
          <BiCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
