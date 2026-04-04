import { Link } from "react-router-dom";
import "../css/Herosection.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// funtion to scroll smoothly to the section mentioned
export default function HeroSection({ onAIChatClick, onLoginClick }) {

  // funtion to scrool smoothly to hire page
    const scrollToHire = () =>
    document.getElementById("hire")?.scrollIntoView({ behavior: "smooth" });

    // prevents error if page not found

    // returned render of ui
  return (
    // here section  with background, white text padding
    <section className="hero-bg text-white py-5">

      {/* layout spacing */}
      <div className="container">

        {/* create columns */}
        <div className="row align-items-center">

          {/* row to create columns */}
          <div className="col-lg-7">

            {/* lmain into heading */}
            <span className="badge bg-warning text-dark mb-3 px-3 py-2 fs-6">
              🇰🇪 Kenya's #1 Machinery Platform
            </span>

            <h1 className="display-3 fw-bold mb-3">
              Hire, Buy, or Sell<br />Heavy Machinery with{" "}
              <span className="text-warning">Confidence</span>
            </h1>
            
            <p className="lead mb-4 text-white-75">
              Excavators, cranes, bulldozers, industrial plants &amp; power tools.<br />

              <strong className="text-warning">Instant M-Pesa</strong> • Verified Owners • 24/7 Gemini AI Support
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link to="/addproducts" className="btn btn-warning btn-lg px-4 py-3 fw-bold">
                <i className="fas fa-search me-2" />Browse Equipment
              </Link>

                {/* button to list machine or add machinery for hire or resale */}
              <button onClick={onLoginClick} className="btn btn-outline-light btn-lg px-4 py-3 fw-bold border-2">
                <Link to="/addproducts" className="no-underline" >
                <i className="fas fa-plus me-2" />List Your Machine
                </Link>
              </button>

              {/* button for ai tooggle chat assistance */}
              <button onClick={onAIChatClick} className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                <i className="fas fa-robot me-2" />Ask AI Assistant
              </button>

            </div>

            {/* bootstrap icons styling and naming */}
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <TrustItem icon="fa-shield-alt" color="text-success" label="KRA &amp; NTSA Verified" />
              <TrustItem icon="fa-star"       color="text-warning"  label="4.9/5 · 1,248 clients" />
              <TrustItem icon="fa-truck"      color="text-success"  label="&lt;48hr Delivery" />
              <TrustItem icon="fa-lock"       color="text-success"  label="Secure Payments" />

              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/M-Pesa_logo.svg/2560px-M-Pesa_logo.svg.png"
                alt="M-Pesa" height={28} />
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, color, label }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <i className={`fas ${icon} ${color} fs-5`} />
      <span className="fw-semibold small" dangerouslySetInnerHTML={{__html: label}} />
    </div>
  );
}
