import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  return (
    <TodoCard>
      <p>What's the Plan for Today?</p>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
      />
    </TodoCard>
  );
};

export default App;
