import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
function App() {
  return (
    <>
    <div className="g"><p>bbuuhuhuhu</p></div>
      <div className="app">
        <Navbar />
        <main className="main">
          {" "}
          <Header />
          <Services />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
