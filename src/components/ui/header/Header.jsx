import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="nav">
        <a href="https://college.spbstu.ru/">
          <img
            className="photo"
            src="src/assets/imag/poly-logo.svg"
            alt="Логотип Политеха"
          />
          <img
            className="photo"
            src="src/assets/imag/ispo.svg"
            alt="Логотип ИСПО"
          />
        </a>
      </div>

      <nav className="nav">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/Welcome">Новости</Link>
          </li>
          <li className="menu-item">
            <Link to="#" aria-haspopup="true" aria-expanded="false">
              Группы
            </Link>
            <ul className="menu1">
              <li className="menu-item1">
                <Link to="/Students">Все Студенты</Link>
              </li>
              <li className="menu-item1">
                <Link to="/Book">
                  Информационные системы и программирование
                </Link>
                <ul className="menu2"></ul>
              </li>
              <li className="menu-item1">
                <Link to="/Book">Компьютерные сети и программирование</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link
              className="item"
              to="#"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Расписание
            </Link>
            <ul className="menu1">
              <li className="menu-item1">
                <Link to="/ScheduleStudent">группы</Link>
              </li>
              <li className="menu-item1">
                <Link to="/TeacherSchedul">преподаватели</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link className="item" to="/Teachers">
              Преподаватели
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav">
        <a href="/Profile">
          <img
            className="photo-pr"
            src="src/assets/imag/profile.jpeg"
            alt="Профиль пользователя"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
