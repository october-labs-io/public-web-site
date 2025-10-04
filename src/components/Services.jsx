import React from "react";
import { motion } from "framer-motion";
import { Code, BrainCircuit, Database, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo a Medida",
      description:
        "Creamos aplicaciones web y móviles robustas, escalables y personalizadas para satisfacer tus necesidades específicas.",
    },
    {
      icon: BrainCircuit,
      title: "Inteligencia Artificial",
      description:
        "Implementamos soluciones de IA y Machine Learning para automatizar procesos, obtener insights y potenciar tu negocio.",
    },
    {
      icon: Database,
      title: "Análisis de Datos",
      description:
        "Transformamos tus datos en decisiones estratégicas a través de dashboards interactivos y análisis predictivos.",
    },
    {
      icon: Smartphone,
      title: "Consultoría Tecnológica",
      description:
        "Te guiamos en tu viaje de transformación digital, desde la estrategia hasta la implementación y optimización.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones integrales para llevar tu empresa al siguiente nivel.
          </p>
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

export default Services;
