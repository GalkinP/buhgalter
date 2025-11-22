import "./Footer.css";
import Calendar from "./Calendar";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <>
            <Calendar compact />
          </>
        </div>
        <div className="footer-right">
          {" "}
          <p>
            © {new Date().getFullYear()} Бухгалтерская папка. Все права
            защищены.
          </p>
          <p>Телефон: +7 (950) 007-82-33 | Email: info@accounting-folder.ru</p>
          <div className="contact-links">
        <a href="https://t.me/galkaaa84" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i> Telegram
        </a>
        <a href="https://wa.me/79500078233" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="tel:+79500078233">
          <i className="fas fa-phone"></i> Позвонить
        </a>
      </div>
        </div>
      </div>
    </footer>
  );
}
