
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./AppRoutes.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div >
        {" "}
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
