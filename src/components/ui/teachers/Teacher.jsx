import React from "react";
import "./Teacher.css";
import Table from "./table/table";

const TeachersData = [
  {
    id: 1,
    last_name: "Когумбаева",
    first_name: "Данель",
    surname: "Ерлановна",
    birth_date: "2006-04-02",
    gender: "Male",
    email: "danel@gmail.com",
    phone: "123456789",
    address: "123 Main St",
    enrollment_date: "2022-09-01",
    group_id: 101,
  },
  {
    id: 2,
    last_name: "Когумбаева",
    first_name: "Татьяна",
    surname: "Ерлановна",
    birth_date: "2006-04-02",
    gender: "Male",
    email: "danel@gmail.com",
    phone: "123456789",
    address: "123 Main St",
    enrollment_date: "2024-09-01",
    group_id: 203,
  },
];

const Teacher = () => {
  return (
    <main>
      <h1>любимые преподы</h1>
      <Table students={TeachersData} />
    </main>
  );
};

export default Teacher;
