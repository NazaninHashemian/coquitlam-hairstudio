import "./Gallery.css";
import galleryImg from "../assets/gallery.jpg"; // main gallery image
import hair1 from "../assets/1.webp";
import hair2 from "../assets/2.webp";
import hair3 from "../assets/3.webp";
import hair4 from "../assets/4.webp";
import hair5 from "../assets/5.webp";
import hair6 from "../assets/6.webp";
import hair7 from "../assets/7.jpeg";
import hair8 from "../assets/8.jpeg";

const Gallery = () => {
  const haircuts = [hair1, hair2, hair3, hair4, hair5, hair6, hair7, hair8];

  return (
    <section id="gallery" className="gallery-section">
      {/* Main image + title/description */}
      <div className="gallery-header">
        <img
          src={galleryImg}
          alt="Gallery Animation"
          style={{ width: "150px", maxHeight: "300px", objectFit: "cover" }}
        />
        <h2>Gallery</h2>
        <p>Here are some examples of our haircuts and styles.</p>
      </div>

      {/* Haircut grid */}
      <div className="gallery-grid">
        {haircuts.map((img, idx) => (
          <img key={idx} src={img} alt={`Haircut example ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
