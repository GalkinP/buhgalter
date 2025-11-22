import "./Header.css";
import logo from "../assets/photo.png"; // путь к логотипу

export default function Header() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay hero-content">
        <img src={logo} alt="ФИНГРАД логотип" className="hero-logo" />
        <div className="hero-text">
          <h1>Бухгалтерские услуги</h1>
          <p>Ваши финансы — в порядке, документы — под контролем.</p>
        </div>
      </div>
    </section>
  );
}
