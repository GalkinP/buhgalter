import ContactForm from "./ContactForm";
import Calendar from "./Calendar"; // твой компонент календаря
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <ContactForm />
        <Calendar />
      </div>
    </section>
  );
}
