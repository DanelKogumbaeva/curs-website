import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Students from "./pages/AllStudents";
import Teachers from "./pages/Teachers";
import ScheduleStudent from "./pages/ScheduleStudent";
import TeacherSchedul from "./pages/SchedulTeacher";
import Book from "./pages/Book";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Students" element={<Students />}></Route>
        <Route path="/Teachers" element={<Teachers />}></Route>
        <Route path="/Welcome" element={<Welcome />}></Route>
        <Route path="/ScheduleStudent" element={<ScheduleStudent />}></Route>
        <Route path="/TeacherSchedul" element={<TeacherSchedul />}></Route>
        <Route path="/Book" element={<Book />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
