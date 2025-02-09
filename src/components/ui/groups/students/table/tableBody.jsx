import React from "react";
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

export default TableBody;
