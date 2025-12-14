import Header from "../components/Header";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <div className="home">
      <Header />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}
