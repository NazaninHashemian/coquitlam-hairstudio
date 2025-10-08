//       <p>3320 Rosalie Crt, Coquitlam, British Colombia, Canada V3E 2Z8</p>

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="sec1">
          <NavBar />
        </section>

        <section className="sec2">
          <section className="left">
            <h1>Welcome!</h1>
          </section>

          <section className="right">
            <p>Experience the best hair styling services in Coquitlam.</p>
            <p>3320 Rosalie Crt, Coquitlam, British Colombia, Canada V3E 2Z8</p>
            <p>647-877-3029</p>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
