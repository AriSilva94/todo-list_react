import { useState } from "react";
import { todo } from "./data/todo";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
import "./assets/styles/App.css";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";

function App() {
  const [todos, setTodos] = useState(todo);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

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
      <Search {...{ search, setSearch }} />
      <Filter {...{ filter, setFilter, setSort }} />
      <Todo {...{ sort, filter, search, todos, setTodos }} />
      <Form {...{ todos, addTodo }} />
    </div>
  );
}

export default App;
