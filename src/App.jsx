import { useState } from "react";
// import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "./assets/App.css";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
