import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import StudentForm from "../studentForm/studentForm.jsx";

const Table = ({ students, onAdd, onUpdate, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const uniqueGroups = [
    ...new Set(students.map((student) => student.group_id).filter(Boolean)),
  ];

  const filteredStudents = students.filter(
    (student) =>
      Object.values(student).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) &&
      (filterGroup === "" || student.group_id === parseInt(filterGroup))
  );

  const handleOpenForm = (student = null) => {
    setSelectedStudent(student);
    setIsFormOpen(true);
  };

  return (
    <div className="table-container">
      <TableHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterGroup={filterGroup}
        setFilterGroup={setFilterGroup}
        uniqueGroups={uniqueGroups}
        onAdd={() => handleOpenForm()}
      />
      <TableBody students={filteredStudents} onRowClick={handleOpenForm} />
      {isFormOpen && (
        <StudentForm
          student={selectedStudent}
          onClose={() => setIsFormOpen(false)}
          onSave={onUpdate}
          onDelete={onDelete}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

Table.propTypes = {
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
      group_id: PropTypes.number.isRequired, // ID группы
    })
  ).isRequired, // Обязательный массив студентов
  onAdd: PropTypes.func.isRequired, // Функция добавления студента
  onUpdate: PropTypes.func.isRequired, // Функция обновления студента
  onDelete: PropTypes.func.isRequired, // Функция удаления студента
};

export default Table;
