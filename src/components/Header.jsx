import "./Header.css";
import heroImage from "../assets/image.png";

export default function Header() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Бухгалтерские услуги</h1>
          <p>
            Ваши финансы — в порядке
            <br />
            документы — под контролем.
          </p>
          <span className="shadow" aria-hidden="true"></span>
        </div>
        <div className="hero-image">
          <div className="image-fade">
            <img src={heroImage} alt="Рабочее место бухгалтера" />
          </div>
        </div>
      </div>
    </section>
  );
}
