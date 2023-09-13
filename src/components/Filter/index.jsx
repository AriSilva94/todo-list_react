import "./style.css";

export const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button className="btn-asc">Asc</button>
          <button className="btn-desc">Desc</button>
        </div>
      </div>
    </div>
  );
};
