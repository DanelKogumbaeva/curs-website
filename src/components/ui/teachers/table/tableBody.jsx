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
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Дата Рождения</th>
          <th>Пол</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Домашний Адрес</th>
          <th>Дата Трудоустройства</th>
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
      lastName: PropTypes.string.isRequired, // Фамилия
      firstName: PropTypes.string.isRequired, // Имя
      surname: PropTypes.string.isRequired, // Имя
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
