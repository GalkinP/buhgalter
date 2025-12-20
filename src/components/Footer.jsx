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
          <p>Телефон: tel:+7-900-649-76-81 | Email: info.buch24@yandex.ru</p>
          <div className="contact-links">
        <a href="https://t.me/galkaaa84" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i> Telegram
        </a>
        <a href="https://wa.me/79500078233" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="tel:+79006497681">
          <i className="fas fa-phone"></i> Позвонить
        </a>
      </div>
        </div>
      </div>
    </footer>
  );
}
