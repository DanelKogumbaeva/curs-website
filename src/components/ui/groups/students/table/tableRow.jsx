import React from "react";
import "./Table.css";

const TableRow = ({ student, index, onRowClick }) => {
  return (
    <tr
      className={index % 2 === 0 ? "even-row" : "odd-row"}
      onClick={() => onRowClick(student)}
    >
      <td>{student.id}</td>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.birth_date}</td>
      <td>{student.gender}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.address}</td>
      <td>{student.enrollment_date}</td>
      <td>{student.group_id || "N/A"}</td>
    </tr>
  );
};

export default TableRow;
