import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="nav">
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
                <Link to="/MainPage">Все Студенты</Link>
              </li>
              <li className="menu-item1">
                <Link to="/MainPage">инф сист</Link>
                <ul className="menu2">
                  <li className="menu-item2">
                    <Link to="/MainPage">419/7</Link>
                  </li>
                  <li className="menu-item2">
                    <Link to="/MainPage">419/8</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item1">
                <Link to="/MainPage">комп сети</Link>
                <ul className="menu2">
                  <li className="menu-item2">
                    <Link to="/MainPage">429/7</Link>
                  </li>
                  <li className="menu-item2">
                    <Link to="/MainPage">429/8</Link>
                  </li>
                </ul>
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
                <Link to="/MainPage">мое</Link>
              </li>
              <li className="menu-item1">
                <Link to="/MainPage">преподаватели</Link>
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
        <a href="/profile">
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
