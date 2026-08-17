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
          <img src="10.jpg" alt="Haircut example 10" />
          <img src="11.jpg" alt="Haircut example 11" />
          <img src="12.jpg" alt="Haircut example 12" />
          <img src="13.jpg" alt="Haircut example 13" />
          <img src="14.jpg" alt="Haircut example 14" />
          <img src="15.jpg" alt="Haircut example 15" />
          <img src="16.jpg" alt="Haircut example 16" />
          {/* <img src="17.jpg" alt="Haircut example 17" /> */}
          <img src="18.jpg" alt="Haircut example 18" />
          <img src="19.jpg" alt="Haircut example 19" />
          <img src="20.jpg" alt="Haircut example 20" />
          <img src="21.jpg" alt="Haircut example 21" />
          <img src="22.jpg" alt="Haircut example 22" />
          <img src="23.jpg" alt="Haircut example 23" />
          <img src="24.jpg" alt="Haircut example 24" />
          <img src="25.jpg" alt="Haircut example 25" />
          <img src="26.jpg" alt="Haircut example 26" />
          <img src="27.jpg" alt="Haircut example 27" />
          <img src="28.jpg" alt="Haircut example 28" />
          <img src="29.jpg" alt="Haircut example 29" />
          {/* <img src="30.jpg" alt="Haircut example 20" /> */}
          <img src="31.jpg" alt="Haircut example 30" />
          <img src="32.jpg" alt="Haircut example 31" />
          <img src="33.jpg" alt="Haircut example 32" />
          <img src="34.jpg" alt="Haircut example 33" />
          <img src="35.jpg" alt="Haircut example 34" />
          <img src="36.jpg" alt="Haircut example 35" />
          <img src="37.jpg" alt="Haircut example 36" />
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
