import React, { useState } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import ScheduleTable from "./ScheduleTable";
import "../Schedule.css";

const StudentSchedule = () => {
  const [startDate, setStartDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const handleNext = () => setStartDate((prev) => addDays(prev, 14));
  const handlePrev = () => setStartDate((prev) => addDays(prev, -14));

  const endDate = addDays(startDate, 13);

  return (
    <main>
      {" "}
      <div className="schedule-container">
        <div className="schedule-header">
          <button onClick={handlePrev}>← Назад</button>
          <h2 className="schedule-title">
            Расписание с {format(startDate, "dd.MM.yyyy")} по{" "}
            {format(endDate, "dd.MM.yyyy")}
          </h2>
          <button onClick={handleNext}>Вперёд →</button>
        </div>
        <div className="table">
          <ScheduleTable startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </main>
  );
};

export default StudentSchedule;
