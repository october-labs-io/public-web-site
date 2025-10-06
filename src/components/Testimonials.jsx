import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Elena García",
      role: "CEO, Innovate Corp",
      text: "October Labs IO transformó nuestra infraestructura de datos. Su equipo no solo es experto, sino que también se compromete verdaderamente con el éxito del proyecto. ¡Los resultados superaron nuestras expectativas!",
      image:
        "Professional headshot of a confident female tech CEO, modern office background",
    },
    {
      name: "Marcos Pérez",
      role: "Director de Producto, Future Solutions",
      text: "El desarrollo de nuestra aplicación móvil fue impecable. Cumplieron con los plazos y la calidad del código es excepcional. Son un socio tecnológico de confianza.",
      image:
        "Professional portrait of a male product director, casual business attire, bright background",
    },
    {
      name: "Sofía López",
      role: "Fundadora, DataDriven Co.",
      text: "La implementación de su modelo de IA ha optimizado nuestras operaciones en un 40%. El equipo de October Labs IO es brillante y su enfoque es increíblemente estratégico.",
      image:
        "Professional photo of a sophisticated female founder, elegant business setting",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Construimos relaciones duraderas basadas en la confianza y los
            resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 flex flex-col"
            >
              <Quote className="w-10 h-10 text-purple-500 mb-4" />
              <p className="text-gray-300 leading-relaxed flex-grow mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  alt={`Foto de ${testimonial.name}`}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
