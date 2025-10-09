import animationImg from "../assets/animation.jpg";
function About() {
  return (
    <section id="about" className="about-section">
      <img
        src={animationImg}
        alt="Animation"
        style={{ width: "100px", maxHeight: "300px", objectFit: "cover" }}
      />
      <h2>About Us</h2>
      <p>Experience the best haircut services in Coquitlam.</p>
      <p>3320 Rosalie Crt, Coquitlam, British Columbia, Canada V3E 2Z8</p>
      <p>647-877-3029</p>
    </section>
  );
}

export default About;
