import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // функция для закрытия меню
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/photo.png" alt="" />
      </div>

      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      <ul className={`tabs ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" onClick={handleLinkClick}>
            Главная
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick}>
            Услуги
          </a>
        </li>
        <li>
          <a href="#calendar" onClick={handleLinkClick}>
            Календарь
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
