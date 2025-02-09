import React from "react";
import "./Table.css";

const TableHeader = ({
  searchTerm,
  setSearchTerm,
  filterGroup,
  setFilterGroup,
  uniqueGroups,
  onAdd,
}) => {
  return (
    <div className="table-header">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="right">
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
        <button className="add-button" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
