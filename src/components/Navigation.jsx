import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Tecnología", href: "#tech" },
    { name: "Clientes", href: "#testimonials" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <img
              src="https://horizons-cdn.hostinger.com/a60eb5fe-aba3-46c3-b9b2-81659102651e/258043e98140b0bcebb9956958ad0170.png"
              alt="Quantum IO Logo"
              className="h-10"
            />
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                whileHover={{ scale: 1.1, color: "#a78bfa" }}
                onClick={() => scrollToSection(link.href)}
                className="cursor-pointer font-medium text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-purple-500/20"
            >
              Contactar ahora
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-400 font-medium cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
                >
                  Contactar ahora
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
