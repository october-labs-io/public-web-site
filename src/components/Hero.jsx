import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
//import octoberLabsLogo from "../assets/October-labs-io_logoWebsite.svg";
import octoberLabsLogo from "../assets/logo_multicolor.svg";
import octoberLabsLogoW from "../assets/logo_white.svg";
import octoberLabsNewLogo from "../assets/new_logo.svg";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 bg-grid-purple-500/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 w-[80rem] h-[80rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-purple-900/50 via-blue-900/50 to-transparent rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={octoberLabsNewLogo}
            alt="October Labs io"
            className="h-24 md:h-40 mx-auto mb-8"
          />

          <h1 className="text-5xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            We Orchestrate AI to Fast-Track Your Success
          </h1>

          <h2 className="text-xl md:text-3xl mb-10 text-gray-300 max-w-3xl mx-auto">
            It’s not about using AI, it’s about doing it right.
          </h2>

          <h3 className="text-xl md:text-lg mb-10 text-gray-300 max-w-3xl mx-auto">
            We know which AI fits each stage of your product’s journey. 
            That’s how we build efficiently and scalable, speed up launch, and stay focused with you on what matters most... turning your idea into a success.
          </h3>

          {/*<div className="flex justify-center gap-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl shadow-purple-500/30 group"
            >
              Let´s talk about your ideas
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            {/* <Button
              onClick={() => scrollToSection("#services")}
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white font-bold text-lg px-8 py-6 rounded-full"
            >
              Our stack
            </Button>
          </div>*/}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
