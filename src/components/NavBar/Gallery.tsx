function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <h2>Gallery</h2>
      <p>Here are some examples of our haircuts and styles.</p>

      <div className="gallery-grid">
        <img src="/gallery/img1.jpg" alt="Haircut example 1" />
        <img src="/gallery/img2.jpg" alt="Haircut example 2" />
        <img src="/gallery/img3.jpg" alt="Haircut example 3" />
        <img src="/gallery/img4.jpg" alt="Haircut example 4" />
      </div>
    </section>
  );
}

export default Gallery;
