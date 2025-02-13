import React from "react";
import Header from "../components/ui/header/Header";
import SchedulTeacher from "../components/ui/shedule/teacher/teacherShedule";

const TeacherSchedul = () => {
  console.log(" Shedule рендерится");
  return (
    <>
      <Header />
      <SchedulTeacher />
    </>
  );
};

export default TeacherSchedul;
