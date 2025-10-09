import animationImg from "../assets/animation.jpg";
function About() {
  return (
    <section id="about" className="about-section">
      <section className="first">
        <img
          src={animationImg}
          alt="Animation"
          style={{ width: "100px", maxHeight: "300px", objectFit: "cover" }}
        />
      </section>

      <section className="second">
        <h2>About Us</h2>
        <p>Experience the best haircut services in Coquitlam.</p>
        <p>3320 Rosalie Crt, Coquitlam, British Columbia, Canada V3E 2Z8</p>
        <p>647-877-3029</p>
      </section>
    </section>
  );
}

export default About;
