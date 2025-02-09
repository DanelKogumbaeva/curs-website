import "./filterPanel.css";
import PropTypes from "prop-types";
import React from "react";

const FilterPanel = ({ setFilter }) => {
  return (
    <div className="filter-panel">
      <button onClick={() => setFilter("Все")}>Все</button>
      <button onClick={() => setFilter("Преподаватели")}>Преподаватели</button>
      <button onClick={() => setFilter("Отделение туризм")}>
        Отделение туризм
      </button>
      <button onClick={() => setFilter("Отделение инф техн")}>
        Отделение инф техн
      </button>
      <button onClick={() => setFilter("Старосты")}>Старосты</button>
    </div>
  );
};

FilterPanel.propTypes = {
  // setFilter должен быть функцией и является обязательным пропсом
  setFilter: PropTypes.func.isRequired,
};

export default FilterPanel;
