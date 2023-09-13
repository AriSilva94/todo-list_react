import "./style.css";

export const Todo = ({ search, todos, setTodos }) => {
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <div>
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map(({ id, text, category, isCompleted }) => (
            <div
              key={id}
              className="todo"
              style={{ textDecoration: isCompleted ? "line-through" : "" }}
            >
              <div className="content">
                <p>{text}</p>
                <p className="category">({category})</p>
              </div>
              <div className="todo-buttons">
                <button className="complete" onClick={() => completeTodo(id)}>
                  Completar
                </button>
                <button className="remove" onClick={() => removeTodo(id)}>
                  x
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
