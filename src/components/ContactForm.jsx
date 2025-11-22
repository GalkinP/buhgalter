import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Отправка...");

    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Сообщение отправлено!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Ошибка при отправке.");
      }
    } catch (error) {
      setStatus("Ошибка соединения.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Есть вопросы? Свяжитесь с нами</h2>

      <div className="contact-links">
        <a
          href="https://t.me/galkaaa84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram"></i> Telegram
        </a>
        <a
          href="https://wa.me/79500078233"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="tel:+79500078233">
          <i className="fas fa-phone"></i> Позвонить
        </a>
      </div>

      <p className="alt-text">или можете связаться с нами по форме:</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Отправить</button>
      </form>
      <p className="status">{status}</p>
    </section>
  );
}
