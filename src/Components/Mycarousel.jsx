import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../css/Mycarousel.css'   // custom scoped styles

const Mycarousel = () => {
  return (
    <div className="my-carousel-wrapper container mt-4">

      <div className="row">
        <div className="col-md-10 mx-auto">
          
          <div id="carouselExample" className="carousel slide my-carousel" data-bs-ride="carousel">

            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="/images/cranes.jpg"
                  className="carousel-img"
                  alt="First slide"
                />
                <div className="carousel-caption custom-caption">
                  <h5>First Slide</h5>
                  <p>This is the first slide caption.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/images/excavator2.jpg"
                  className="carousel-img"
                  alt="Second slide"
                />
                <div className="carousel-caption custom-caption">
                  <h5>Second Slide</h5>
                  <p>This is the second slide caption.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/images/roller.jpg"
                  className="carousel-img"
                  alt="Third slide"
                />
                <div className="carousel-caption custom-caption">
                  <h5>Third Slide</h5>
                  <p>This is the third slide caption.</p>
                </div>
              </div>

            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Mycarousel;