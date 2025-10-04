import React from "react";
import { motion } from "framer-motion";

const Technology = () => {
  const techStack = [
    { name: "React", image: "https://cdn.svgporn.com/logos/react.svg" },
    { name: "Node.js", image: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
    { name: "Python", image: "https://cdn.svgporn.com/logos/python.svg" },
    { name: "Docker", image: "https://cdn.svgporn.com/logos/docker-icon.svg" },
    {
      name: "Kubernetes",
      image: "https://cdn.svgporn.com/logos/kubernetes.svg",
    },
    { name: "AWS", image: "https://cdn.svgporn.com/logos/aws.svg" },
    {
      name: "TensorFlow",
      image: "https://cdn.svgporn.com/logos/tensorflow.svg",
    },
    {
      name: "PostgreSQL",
      image: "https://cdn.svgporn.com/logos/postgresql.svg",
    },
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
            Nuestra Tecnología
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Utilizamos un stack tecnológico moderno y robusto para construir
            soluciones de alto rendimiento.
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
