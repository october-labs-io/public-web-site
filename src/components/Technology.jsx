import React from "react";
import { motion } from "framer-motion";
import geminiLogo from "../assets/gemini_mc.svg";
import julesLogo from "../assets/jules.svg";
import notebooklmLogo from "../assets/notebooklm.svg";
import stitchLogo from "../assets/stitch.png";
import aiStudioLogo from "../assets/aistudio.svg";
import fireBaseStudioLogo from "../assets/firebase_studio_w.svg";
import openAiLogo from "../assets/openai.svg";
import anthropicLogo from "../assets/anthropic.svg";
import perplexityLogo from "../assets/perplexity.svg";
import v0Logo from "../assets/v0.svg";
import lovableLogo from "../assets/lovable_w.svg";
import moreLogo from "../assets/more.svg";

const Technology = () => {
  const techStack = [
    { name: "Gemini", image: geminiLogo },
    { name: "Chat GPT", image: openAiLogo },
    { name: "Anthropic", image: anthropicLogo },
    { name: "Perplexity", image: perplexityLogo },
    { name: "NotebookLM", image: notebooklmLogo },
    { name: "Google AI Studio", image: aiStudioLogo },
    { name: "Firebase Studio", image: fireBaseStudioLogo },
    { name: "Jules", image: julesLogo },
    // { name: "Stitch", image: stitchLogo },
    { name: "v0", image: v0Logo },
    { name: "Lovable", image: lovableLogo },
    { name: "and more...", image: moreLogo },
    
  ];

  return (
    <section id="tech" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {/*Nuestro Stack*/}
            What We Build With
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {/*Utilizamos un stack de herramientas de AI moderno y robusto para construir soluciones de alto rendimiento. Sabemos exactamente que herramientas usar en cada iteración del producto. */}
            We use a modern, robust AI toolkit to ship high-performance solutions. 
            And because we know which tool fits each stage of your product, every iteration is faster, cleaner, and smarter.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-full flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                  <img
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-300 font-medium transition-colors group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
