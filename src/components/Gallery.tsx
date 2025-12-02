import "./Gallery.css";
import galleryImg from "../assets/gallery.jpg";
function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <section className="first">
        <img
          src={galleryImg}
          alt="Animation"
          style={{ width: "15w0px", maxHeight: "300px", objectFit: "cover" }}
        />
      </section>
      <section className="second">
        <div className="gallery-grid">
          <img src="1.webp" alt="Haircut example 1" />
          <img src="2.webp" alt="Haircut example 2" />
          <img src="3.webp" alt="Haircut example 3" />
          <img src="4.webp" alt="Haircut example 4" />
          <img src="5.webp" alt="Haircut example 5" />
          <img src="6.webp" alt="Haircut example 6" />
          <img src="7.jpeg" alt="Haircut example 7" />
          <img src="8.jpeg" alt="Haircut example 8" />
        </div>
      </section>
    </section>

    // <section id="gallery" className="section gallery-section">
    //   <div className="gallery-header">
    //     <img src="1.webp" alt="Haircut example 1" />
    //   </div>

    // </section>
  );
}

export default Gallery;
