import { useState } from "react";
import { todo } from "./data/todo";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
import "./assets/styles/App.css";

function App() {
  const [todos, setTodos] = useState(todo);
  return (
    <div className="app">
      <Header />
      <Todo {...{ todos }} />
      <Form />
    </div>
  );
}

export default App;
