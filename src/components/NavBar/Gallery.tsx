function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <h2>Gallery</h2>
      <p>Here are some examples of our haircuts and styles.</p>

      <div className="gallery-grid">
        <img src="1.webp" alt="Haircut example 1" />
        <img src="2.webp" alt="Haircut example 2" />
        <img src="3.webp" alt="Haircut example 3" />
        <img src="4.webp" alt="Haircut example 4" />
        <img src="5.webp" alt="Haircut example 5" />
        <img src="6.webp" alt="Haircut example 6" />
        <img src="7.webp" alt="Haircut example 7" />
        <img src="8.webp" alt="Haircut example 8" />
      </div>
    </section>
  );
}

export default Gallery;
