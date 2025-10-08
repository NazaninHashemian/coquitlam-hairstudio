//       <p>3320 Rosalie Crt, Coquitlam, British Colombia, Canada V3E 2Z8</p>

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <NavBar />

      <Home />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
