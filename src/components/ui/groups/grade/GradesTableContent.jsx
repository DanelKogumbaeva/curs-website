import React from "react";
import PropTypes from "prop-types";

export default function GradesTableContent({ students, labs }) {
  return (
    <table className="table-book">
      <thead>
        <tr>
          <th className="border-student">Студент</th>
          {labs.map((lab, index) => (
            <th key={index} className="border-lab">
              {lab}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td className="border-student">{student.name}</td>
            {labs.map((_, labIndex) => (
              <td key={labIndex} className="border p-2">
                <input
                  type="number"
                  min="2"
                  max="5"
                  defaultValue={student.grades[labIndex] ?? ""}
                  className="w-16 border p-1 rounded"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Пропсы с указанием типов
GradesTableContent.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      grades: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  labs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
