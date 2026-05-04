import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Shield, Globe, Award, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { icon: Shield, title: "Trust & Safety", desc: "Verified sellers and quality-checked equipment on every listing." },
  { icon: Globe, title: "East Africa Reach", desc: "Connecting buyers and sellers across Kenya, Uganda, Tanzania and beyond." },
  { icon: Award, title: "Quality Assurance", desc: "Every machine meets our rigorous inspection standards before listing." },
  { icon: Wrench, title: "Full Support", desc: "End-to-end assistance from search to delivery and after-sales service." },
];

const team = [
  { name: "Bonface Okeyo", role: "CEO & Founder", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Grace Atieno", role: "Operations Director", img: "https://i.pravatar.cc/150?img=32" },
  { name: "David Kimani", role: "Head of Engineering", img: "https://i.pravatar.cc/150?img=53" },
  { name: "Amina Hassan", role: "Marketing Lead", img: "https://i.pravatar.cc/150?img=44" },
];

// ❌ TS: (
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            About Machinery & Plants
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="text-primary-foreground/60 text-lg leading-relaxed"
          >
            East Africa's leading marketplace for hiring, buying, and selling heavy machinery and construction equipment — empowering builders, contractors, and businesses since 2020.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">Our Mission</span>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Making Heavy Equipment Accessible
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe every contractor — from large firms to solo operators — deserves easy access to the right machinery at the right price.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Whether you're hiring an excavator or buying a crane, we streamline the entire process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
              alt="Construction"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Why Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
              >
                <Card className="h-full text-center hover:shadow-md transition">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <v.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold">
              Meet the Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible">
                <Card className="text-center hover:shadow-md">
                  <img src={m.img} alt={m.name} className="w-full h-48 object-cover" />
                  <CardContent>
                    <h3>{m.name}</h3>
                    <p className="text-sm">{m.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;