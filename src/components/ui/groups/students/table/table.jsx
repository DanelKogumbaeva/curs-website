import React, { useState } from "react";
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

export default Table;
