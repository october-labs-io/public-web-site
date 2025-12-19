import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import HowWeWork from "./components/HowWeWork";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>October Labs IO</title>
        <meta
          name="description"
          content="IO: Impulsamos la transformación digital con soluciones de software a medida, inteligencia artificial y análisis de datos."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        <Navigation isScrolled={isScrolled} />
        <main>
          <Hero />
          <AboutUs />
          {/* <Services /> */}
          <HowWeWork />
          <Technology />
          <Testimonials />
          <Contact />
          {/* <ContactWeb3Forms /> */}
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
