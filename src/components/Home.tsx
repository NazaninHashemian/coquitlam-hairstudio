import logoImg from "../assets/logo.png";
function Home() {
  return (
    <section id="home" className="section">
      <img
        src={logoImg}
        alt="Animation"
        style={{ width: "110px", maxHeight: "300px", objectFit: "cover" }}
      />
      <h1>Welcome to Coquitlam Hair Studio</h1>
      <p>Experience the best hair styling services in Coquitlam.</p>
    </section>
  );
}

export default Home;
