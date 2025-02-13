import React from "react";
import Header from "../components/ui/header/Header";
import StudentSchedule from "../components/ui/shedule/student/studentShedule";

const ScheduleStudent = () => {
  console.log(" Shedule рендерится");
  return (
    <>
      <Header />
      <StudentSchedule />
    </>
  );
};

export default ScheduleStudent;
