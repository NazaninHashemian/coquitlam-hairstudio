import contactImg from "../assets/contactUs.png";
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <img
        src={contactImg}
        alt="Animation"
        style={{ width: "100px", maxHeight: "300px", objectFit: "cover" }}
      />
      <h2>Contact Us</h2>
      <p>na.hashemian@gmail.com</p>
      <p>https://www.instagram.com/coquitlam_hair_studio</p>
      <button className="book-btn">Book Now</button>
    </section>
  );
}

export default Contact;
