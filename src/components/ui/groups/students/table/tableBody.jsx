import React from "react";
import PropTypes from "prop-types";
import "./Table.css";
import TableRow from "./TableRow";

const TableBody = ({ students, onRowClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Enrollment Date</th>
          <th>Group ID</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <TableRow
            key={student.id}
            student={student}
            index={index}
            onRowClick={onRowClick}
          />
        ))}
      </tbody>
    </table>
  );
};

TableBody.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // ID студента
      firstName: PropTypes.string.isRequired, // Имя
      lastName: PropTypes.string.isRequired, // Фамилия
      birthDate: PropTypes.string.isRequired, // Дата рождения
      gender: PropTypes.string.isRequired, // Пол
      email: PropTypes.string.isRequired, // Email
      phone: PropTypes.string.isRequired, // Телефон
      address: PropTypes.string.isRequired, // Адрес
      enrollmentDate: PropTypes.string.isRequired, // Дата зачисления
      groupId: PropTypes.string.isRequired, // ID группы
    })
  ).isRequired, // Обязательный массив студентов
  onRowClick: PropTypes.func.isRequired, // Функция, вызываемая при клике по строке
};

export default TableBody;
