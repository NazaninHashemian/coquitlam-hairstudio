import logoImg from "../assets/logo.png";
function Home() {
  return (
    <section id="home" className="section">
      <section className="first">
        <img
          src={logoImg}
          alt="Animation"
          style={{ width: "110px", maxHeight: "300px", objectFit: "cover" }}
        />
      </section>

      <section className="second">
        <h2>Welcome to Coquitlam Hair Studio</h2>
        <p>Experience the best hair styling services in Coquitlam.</p>
      </section>
    </section>
  );
}

export default Home;
