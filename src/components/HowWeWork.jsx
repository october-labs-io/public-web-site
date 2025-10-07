import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, TextSearch, Brush, Code } from "lucide-react";

const HowWeWork = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Ideación y Validación Acelerada",
      description:
        "Utilizamos herramientas de AI para prototipar y validar tus ideas rápidamente, asegurando que construimos el producto correcto desde el inicio.",
    },
    {
      icon: TextSearch,
      title: "Análisis Estratégico Inteligente",
      description:
        "Analizamos el mercado y la competencia, realizando benchmarks para posicionar tu producto de manera estratégica y con una ventaja competitiva.",
    },
    {
      icon: Brush,
      title: "Diseño de Experiencias Únicas",
      description:
        "Creamos interfaces intuitivas y atractivas con herramientas de diseño asistido por IA, enfocándonos siempre en la experiencia del usuario final.",
    },
    {
      icon: Code,
      title: "Codificación Eficiente y Escalable",
      description:
        "Aceleramos el desarrollo con asistentes de codificación, construyendo soluciones robustas y listas para escalar junto a tu negocio.",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Flujo de Trabajo
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Cómo convertimos ideas en productos exitosos?
          </p>
          {/* <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lo hacemos a través de la orquestación estratégica de IA, aplicando la herramienta
            precisa para cada necesidad con el fin de acelerar los
            tiempos y optimizar los costos. Cada producto lo vivimos con
            una profunda pasión por construir, guiados por la amabilidad
            en cada interacción y el respeto por las personas y sus
            visiones, reflejando la calidez y el vibrante talento de
            LATAM.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-shadow border border-gray-700 hover:border-purple-500"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
