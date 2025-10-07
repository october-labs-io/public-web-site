import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Inés Fumagalli",
      role: "Admin Manager, Barraca UNO",
      rating: 5,
      text: "Automatización de procesos utilizando AI, como parte de una transformación digital integral.",
      image:
        "Professional headshot of a confident female tech CEO, modern office background",
    },
    {
      name: "Javier Rodríguez",
      role: "Fundador, StartupLab",
      rating: 5,
      text: "Una guía esencial para cualquier emprendedor tecnológico. Carlos tiene el don de explicar conceptos complejos de manera simple y aplicable.",
      image:
        "Professional portrait of a young male entrepreneur, casual business attire, bright background",
    },
    {
      name: "Ana Martínez",
      role: "Inversora Angel",
      rating: 5,
      text: "Como inversora, he visto muchos emprendedores aplicar los principios de este libro con resultados extraordinarios. Es lectura obligatoria.",
      image:
        "Professional photo of a sophisticated female investor, elegant business setting",
    },
    {
      name: "Diego Fernández",
      role: "CTO, InnovateTech",
      rating: 5,
      text: "La sección sobre desarrollo de MVP me ahorró meses de trabajo. Este libro es oro puro para cualquier persona en el mundo tech.",
      image:
        "Professional headshot of a male tech executive, modern tech office background",
    },
    {
      name: "Laura Sánchez",
      role: "Product Manager",
      rating: 5,
      text: "Increíblemente práctico y lleno de insights valiosos. Lo he regalado a todo mi equipo y ahora es nuestra biblia de producto.",
      image:
        "Professional portrait of a female product manager, creative workspace background",
    },
    {
      name: "Roberto Torres",
      role: "Emprendedor",
      rating: 5,
      text: "Después de leer este libro, lancé mi startup en 3 meses. Las herramientas y frameworks son invaluables. ¡Gracias Carlos!",
      image:
        "Professional photo of an enthusiastic male entrepreneur, startup office setting",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen los Lectores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de emprendedores ya han transformado sus negocios con este
            libro
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-500 text-amber-500" />
            ))}
            <span className="ml-3 text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600 ml-2">(2,847 reseñas)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200" />

              <div className="flex items-center gap-4 mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  alt={`Foto de ${review.name}`}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Únete a miles de emprendedores exitosos
            </h3>
            <p className="text-gray-600 text-lg">
              No dejes que tu idea se quede solo en eso. Comienza tu viaje
              emprendedor hoy mismo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
