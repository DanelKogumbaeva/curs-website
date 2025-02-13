import React, { useState } from "react";
import GroupSelector from "./GroupSelector";
import GradesTableContent from "./GradesTableContent";
import { groups, studentsData, labs } from "./gradeData.jsx";
import "./grade.css";

export default function GradesTable() {
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [students, setStudents] = useState(studentsData[selectedGroup]);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    setStudents(studentsData[group]);
  };

  return (
    <div className="group-book">
      <GroupSelector
        groups={groups}
        selectedGroup={selectedGroup}
        onGroupChange={handleGroupChange}
      />
      <GradesTableContent students={students} labs={labs} />
    </div>
  );
}
