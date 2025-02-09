import "./buttonPanel.css";

const ButtonPanel = ({ onAddPost, toggleFilter }) => {
  return (
    <div className="btn">
      <button className="add-btn" onClick={onAddPost}>
        <img
          className="photo"
          src="src/assets/imag/plus-Photoroom.png"
          alt="Добавить пост"
        />
      </button>
      <button className="filter-btn" onClick={toggleFilter}>
        <img
          className="photo"
          src="src/assets/imag/filtre-Photoroom.png"
          alt="Фильтр"
        />
      </button>
    </div>
  );
};

export default ButtonPanel;
