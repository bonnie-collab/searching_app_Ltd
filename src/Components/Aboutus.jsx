import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Globe, Award, Wrench } from "lucide-react";
import "../css/Aboutus.css";

/* ─── DATA ───────────────────────── */

// Why Choose Us cards
const values = [
  { icon: Shield, title: "Trust & Safety", desc: "Verified sellers and quality-checked equipment on every listing." },
  { icon: Globe, title: "East Africa Reach", desc: "Connecting buyers and sellers across Kenya, Uganda, Tanzania and beyond." },
  { icon: Award, title: "Quality Assurance", desc: "Every machine meets our rigorous inspection standards before listing." },
  { icon: Wrench, title: "Full Support", desc: "End-to-end assistance from search to delivery and after-sales service." },
];

// Team members
const team = [
  { name: "James Mwangi", role: "CEO & Founder", img: "https://i.pravatar.cc/300?img=12" },
  { name: "Grace Atieno", role: "Operations Director", img: "https://i.pravatar.cc/300?img=32" },
  { name: "David Kimani", role: "Head of Engineering", img: "https://i.pravatar.cc/300?img=53" },
  { name: "Amina Hassan", role: "Marketing Lead", img: "https://i.pravatar.cc/300?img=44" },
];

const Aboutus = () => {
  return (
    <div className="about-page">

      {/* ─── NAVBAR ───────────────────────── */}
      <Navbar />

      {/* ─── HERO SECTION ───────────────────────── */}
      <section className="hero">
        <h1>About Machinery & Plants</h1>
        <p>
          East Africa's leading marketplace for hiring, buying, and selling heavy
          machinery and construction equipment — empowering builders and businesses since 2020.
        </p>
      </section>

      {/* ─── MISSION SECTION ───────────────────────── */}
      <section className="mission container">
        <div className="mission-text">
          <span className="section-label">OUR MISSION</span>
          <h2>Making Heavy Equipment Accessible</h2>
          <p>
            We believe every contractor deserves access to the right machinery at the right price.
          </p>
          <p>
            Our platform connects equipment owners directly with those who need them.
          </p>
        </div>

        <div className="mission-img">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Construction"
          />
        </div>
      </section>

      {/* ─── WHY CHOOSE US SECTION ───────────────────────── */}
      <section className="values-section">
        <h2>Why Choose Us</h2>

        {/* 4 COLUMN GRID */}
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="card" key={i}>
              <div className="icon-box">
                <v.icon size={20} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM SECTION ───────────────────────── */}
      <section className="team-section">
        <span className="section-label">OUR TEAM</span>
        <h2>Meet the People Behind It</h2>

        <div className="team-grid">
          {team.map((m, i) => (
            <div className="team-card" key={i}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────── */}
      <Footer />

    </div>
  );
};

export default Aboutus;