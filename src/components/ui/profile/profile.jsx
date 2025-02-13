import React, { useState } from "react";
import "./profile.css";

const StudentProfile = () => {
  // Состояние для хранения данных студента
  const [studentData] = useState({
    photoUrl: "src/assets/imag/profile.jpeg", // Здесь можно поставить URL фотографии студента
    specialty: "Информационные технологии",
    group: "ИТ-01",
    educationLevel: "Среднее специальное",
    profile: "Программирование",
    educationForm: "Очная",
    course: 2,
    enrollmentDate: "01.09.2023",
  });

  return (
    <div className="container">
      <div className="profile-card">
        <img
          src={studentData.photoUrl}
          alt="Student Photo"
          className="profile-ph"
        />
        <div className="info">
          <h2>{studentData.specialty}</h2>
          <p>
            <strong>Группа:</strong> {studentData.group}
          </p>
          <p>
            <strong>Уровень образования:</strong> {studentData.educationLevel}
          </p>
          <p>
            <strong>Профиль:</strong> {studentData.profile}
          </p>
          <p>
            <strong>Форма обучения:</strong> {studentData.educationForm}
          </p>
          <p>
            <strong>Курс:</strong> {studentData.course}
          </p>
          <p>
            <strong>Дата зачисления:</strong> {studentData.enrollmentDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
