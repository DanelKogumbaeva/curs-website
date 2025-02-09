import React, { useState } from "react";
import PropTypes from "prop-types";
import "../groups/students/table/table.jsx";

const Filter = () => {
  const [filterGroup, setFilterGroup] = useState("");
  const uniqueGroups = ["Group 1", "Group 2", "Group 3"]; // Пример уникальных групп

  return (
    <select
      className="filter-select-group"
      value={filterGroup}
      onChange={(e) => setFilterGroup(e.target.value)}
    >
      <option value="">All Groups</option>
      {uniqueGroups.map((group) => (
        <option key={group} value={group}>
          {group}
        </option>
      ))}
    </select>
  );
};

Filter.propTypes = {
  uniqueGroups: PropTypes.arrayOf(PropTypes.string).isRequired, // Массив уникальных групп
};

export default Filter;
