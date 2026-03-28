import React from "react";
import "../css/Howworks.css"; // Import external CSS

const Howworks = () => {
  return (
    //  Section wrapper with light background
    <section className="howworks-section py-5">
      <div className="container text-center">
        
        {/* Section Title */}
        <h2 className="howworks-title mb-4">
          How It Works – 3 Simple Steps
        </h2>

        {/*  Bootstrap row (handles responsiveness automatically) */}
        <div className="row justify-content-center">

          {/* Step 1 */}
          {/* col-12 → full width on mobile */}
          {/* col-sm-6 → 2 columns on small screens */}
          {/* col-md-4 → 3 columns on desktop */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            
            {/* Circle with step number */}
            <div className="step-circle">1</div>

            {/* Step title */}
            <h5 className="step-title mt-3">Browse & Filter</h5>

            {/* Step description */}
            <p className="step-text">
              Use AI smart search or filters to find exactly what you need
            </p>
          </div>

          {/* Step 2 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            
            {/* Circle with step number */}
            <div className="step-circle">2</div>

            {/* Step title */}
            <h5 className="step-title mt-3">Book or Buy</h5>

            {/* Step description */}
            <p className="step-text">
              Instant M-Pesa STK Push or offline agreement
            </p>
          </div>

          {/* Step 3 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            
            {/* Circle with step number */}
            <div className="step-circle">3</div>

            {/* Step title */}
            <h5 className="step-title mt-3">Delivered & Rated</h5>

            {/* Step description */}
            <p className="step-text">
              Equipment arrives, you rate the owner
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Howworks;