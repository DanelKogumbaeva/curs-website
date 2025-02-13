import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

const TableRow = ({ student, index, onRowClick }) => {
  return (
    <tr
      className={index % 2 === 0 ? "even-row" : "odd-row"}
      onClick={() => onRowClick(student)}
    >
      <td>{student.id}</td>
      <td>{student.last_name}</td>
      <td>{student.first_name}</td>
      <td>{student.surname}</td>
      <td>{student.birth_date}</td>
      <td>{student.gender}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.address}</td>
      <td>{student.enrollment_date}</td>
    </tr>
  );
};

TableRow.propTypes = {
  // Объект student с необходимыми полями
  student: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    birth_date: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    enrollment_date: PropTypes.string.isRequired,
    group_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  // Индекс строки, необходимый для стилизации
  index: PropTypes.number.isRequired,
  // Функция-обработчик клика по строке
  onRowClick: PropTypes.func.isRequired,
};

export default TableRow;
