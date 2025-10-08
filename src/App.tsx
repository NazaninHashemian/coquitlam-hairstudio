//       <p>3320 Rosalie Crt, Coquitlam, British Colombia, Canada V3E 2Z8</p>

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome!</h1>
        <p>Experience the best hair styling services in Coquitlam.</p>
        <hr />
        <p>3320 Rosalie Crt, Coquitlam, British Colombia, Canada V3E 2Z8</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
