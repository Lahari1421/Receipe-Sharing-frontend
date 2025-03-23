import React from 'react';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Full-Screen Static Image */}
      <img src="./img1.jpeg" alt="Static" className="w-100" style={{ height: '60vh', objectFit: 'cover' }} />

      {/* Carousel Section with Full Width */}
      <div id="carouselExampleAutoplaying" className="carousel slide mt-3 w-100" data-bs-ride="carousel" style={{ maxWidth: '100vw', height: '60vh' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img2.jpeg" className="d-block w-100" style={{ height: '60vh', objectFit: 'cover' }} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="./img3.jpg" className="d-block w-100" style={{ height: '60vh', objectFit: 'cover' }} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="./img4.jpeg" className="d-block w-100" style={{ height: '60vh', objectFit: 'cover' }} alt="Slide 3" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
