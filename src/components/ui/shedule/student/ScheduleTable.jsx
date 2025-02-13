import React from "react";
import { format } from "date-fns";
import ScheduleData from "./SheduleData";

const ScheduleTable = ({ startDate, endDate }) => {
  const filteredSchedule = ScheduleData.filter(
    (entry) =>
      new Date(entry.date) >= startDate && new Date(entry.date) <= endDate
  );

  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Время</th>
          <th>Название пары</th>
          <th>Преподаватель</th>
        </tr>
      </thead>
      <tbody>
        {filteredSchedule.map((entry, index) => (
          <tr key={index} className="schedule-row">
            <td>{format(new Date(entry.date), "dd.MM.yyyy")}</td>
            <td>{entry.time}</td>
            <td>{entry.subject}</td>
            <td>{entry.teacher}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
