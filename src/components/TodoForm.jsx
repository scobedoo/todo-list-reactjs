import React, { useEffect, useState } from "react";

const TodoForm = ({ todos, setTodos, currentTodo, setCurrentTodo }) => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setInputText(currentTodo.text);
    }
  }, [currentTodo]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        isCompleted: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setInputText("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === currentTodo.id) {
          return {
            ...item,
            text: inputText,
          };
        }
        return item;
      })
    );
    setCurrentTodo(null);
    setInputText("");
  };

  return (
    <form className="mt-6" onSubmit={currentTodo ? handleEdit : handleSubmit}>
      <input
        className="py-2 px-3 w-[70%] h-[48px] rounded-l-md border-r-0 text-sm max-w-xl bg-[#161b2c] border-2 border-[#293353] focus:border-[#540CFE] focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Add a Todo"
        value={inputText}
        onChange={inputTextHandler}
        name="text"
        autoComplete="off"
      />
      <button className="py-2 px-3 h-[48px] rounded-r-md text-sm bg-gradient-to-r from-[#540CFE] to-[#8C00F9] hover:from-[#4a0bdd] hover:to-[#7a03d4]">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
