import React from "react";
import PropTypes from "prop-types";

export default function GroupSelector({
  groups,
  selectedGroup,
  onGroupChange,
}) {
  return (
    <div className="group-filter">
      <label htmlFor="groupSelect">Выберите группу: </label>
      <select
        id="groupSelect"
        value={selectedGroup}
        onChange={(e) => onGroupChange(e.target.value)}
      >
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
}

// Указываем propTypes для проверки типов
GroupSelector.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGroup: PropTypes.string.isRequired,
  onGroupChange: PropTypes.func.isRequired,
};
