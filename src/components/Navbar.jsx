import { useState } from "react";
import { Link } from "react-router-dom";
import{HashLink} from "react-router-hash-link"
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
          <HashLink smooth to="/#hero" onClick={handleLinkClick}>главная</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#services" onClick={handleLinkClick}>услуги</HashLink>
        </li>
        {/* <li>
         <HashLink smooth to='/#calendar' onClick={handleLinkClick}>календарь</HashLink>
        </li> */}
        <li>
          <HashLink smooth to="/#contact" onClick={handleLinkClick}>контакты</HashLink>
        </li>
        <li><Link to="/price" onClick={handleLinkClick}>Цены</Link></li>
      </ul>
    </nav>
  );
}
