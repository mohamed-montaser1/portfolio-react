import "./App.css";
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioPage from "./pages/Work";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
