import { Link } from "react-router-dom";
import "./Students.css";
import Table from "./table/table";

const studentsData = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    birth_date: "2000-01-01",
    gender: "Male",
    email: "john@example.com",
    phone: "123456789",
    address: "123 Main St",
    enrollment_date: "2022-09-01",
    group_id: 101,
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    birth_date: "1999-05-15",
    gender: "Female",
    email: "jane@example.com",
    phone: "987654321",
    address: "456 Elm St",
    enrollment_date: "2021-09-01",
    group_id: 102,
  },
];

const Students = () => {
  return (
    <main>
      <h1>любимые студенты</h1>
      <Table students={studentsData} />
    </main>
  );
};

export default Students;
