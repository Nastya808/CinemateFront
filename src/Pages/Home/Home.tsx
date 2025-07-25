import "./Home.css";
import { mockSections, mockGenres } from "./mockData";

const Home = () => {
  return (
    <div className="home-page">
      <header className="top-banner">
        <div className="overlay">
          <h2 className="top-heading">New top content here</h2>
        </div>
      </header>

      <main className="main-content">
        {mockSections.map((section, index) => (
          <div key={index}>
            <section className="carousel-section">
              <div className="carousel-header">
                <h3 className="carousel-title">{section.title}</h3>
                {index === 0 && (
                  <select className="genre-filter">
                    <option>Filter by genre</option>
                    <option>Action</option>
                    <option>Drama</option>
                  </select>
                )}
              </div>
              <div className="carousel">
                {section.images.map((img, i) => (
                  <img key={i} src={img} alt={`Poster ${i}`} />
                ))}
              </div>
            </section>
            <hr className="section-divider" />
          </div>
        ))}

<section className="genres-grid">
  {mockGenres.map((genre, index) => (
    <div
      key={index}
      className="genre-tile"
      style={{ backgroundImage: `url(${genre.image})` }}
    >
      <span className="genre-title">{genre.title}</span>
    </div>
  ))}
</section>




      </main>
      
    </div>
  );
};

export default Home;
