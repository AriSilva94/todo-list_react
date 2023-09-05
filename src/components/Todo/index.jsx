export const Todo = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(({ id, text, category }) => (
          <div key={id} className="todo">
            <div className="content">
              <p>{text}</p>
              <p className="category">({category})</p>
              <div>
                <button>Completar</button>
                <button>x</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
