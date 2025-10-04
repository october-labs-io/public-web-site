import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, TrendingUp, Users } from 'lucide-react';

const AboutBook = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Ideas Innovadoras',
      description: 'Aprende a identificar oportunidades únicas en el mercado digital'
    },
    {
      icon: TrendingUp,
      title: 'Estrategias de Crecimiento',
      description: 'Técnicas probadas para escalar tu startup de 0 a millones'
    },
    {
      icon: Users,
      title: 'Construcción de Equipos',
      description: 'Cómo formar y liderar equipos de alto rendimiento'
    },
    {
      icon: BookOpen,
      title: 'Casos Reales',
      description: 'Historias inspiradoras de emprendedores exitosos'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre el Libro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una guía completa para transformar tu visión tecnológica en una empresa exitosa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              className="w-full rounded-2xl shadow-xl"
              alt="Interior del libro mostrando contenido sobre emprendimiento digital"
             src="https://images.unsplash.com/photo-1600546706018-9e1267462ddc" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tu Mapa hacia el Éxito Digital
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              En un mundo donde la tecnología avanza a pasos agigantados, este libro te proporciona las herramientas esenciales para navegar el ecosistema de startups con confianza.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde la validación de ideas hasta la captación de inversión, cada capítulo está diseñado para llevarte paso a paso en tu viaje emprendedor.
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
              <p className="text-gray-800 italic">
                "Este libro no solo te enseña teoría, te muestra el camino real que han recorrido emprendedores exitosos para construir sus imperios digitales."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBook;