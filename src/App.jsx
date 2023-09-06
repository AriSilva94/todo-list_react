import { useState } from "react";
import { todo } from "./data/todo";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
import "./assets/styles/App.css";

function App() {
  const [todos, setTodos] = useState(todo);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100000),
        text,
        category,
        isComplete: false,
      },
    ];
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <Header />
      <Todo {...{ todos, setTodos }} />
      <Form {...{ todos, addTodo }} />
    </div>
  );
}

export default App;
