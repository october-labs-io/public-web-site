import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import octoberLabsLogo from "../assets/logo_transparent.svg";

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={octoberLabsLogo}
                alt="October Labs io"
                className="h-10"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Orquestamos la IA para acelerar tu éxito
            </p>
          </div>

          <div>
            <span className="font-bold text-lg text-white mb-4 block">
              Site
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("#workflow")}
                  className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Workflow
                </a>
              </li>
              {/* <li>
                <a
                  onClick={() => scrollToSection("#tech")}
                  className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Stack AI
                </a>
              </li> */}
              <li>
                <a
                  onClick={() => scrollToSection("#testimonials")}
                  className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg text-white mb-4 block">
              Contacto
            </span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-purple-400 mt-1" />
                <span className="text-gray-400">hi@octoberlabs.io</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-purple-400 mt-1" />
                <span className="text-gray-400">+1 (728) 227-7366</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <span className="text-gray-400">Miami, FL</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg text-white mb-4 block">
              Follow us
            </span>
            <div className="flex gap-4">
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/october-labs"
                className="w-10 h-10 text-purple-400 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >              
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 October Labs IO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
