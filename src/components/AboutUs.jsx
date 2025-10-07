import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              El motor tecnológico de tus ideas
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              En October Labs IO, somos un equipo de apasionados por la
              tecnología, dedicados a resolver problemas complejos con
              soluciones elegantes y eficientes. Nuestra experiencia no está
              solo en construir, sino en saber cómo construir. Seleccionamos
              estratégicamente las herramientas de IA para cada necesidad,
              creando un proceso altamente eficiente que reduce costos y te permite
              llegar al mercado mucho antes.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full mt-1">
                  <Rocket className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Nuestra Misión
                  </h3>
                  <p>
                    Lo que hacemos hoy, nuestro propósito
                  </p>
                  <br />
                  <p className="text-gray-400">
                    Ser el socio tecnológico que impulsa el éxito de
                    emprendedores y empresas, transformando sus ideas en
                    productos digitales excepcionales.

                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full mt-1">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Nuestra Visión
                  </h3>
                  <p>
                    El futuro que queremos construir, nuestro impacto a largo
                    plazo
                  </p>
                  <br />
                  <p className="text-gray-400">
                    Ser el referente global de una nueva forma de crear
                    tecnología: una que demuestre que la eficiencia radical de
                    la IA y la calidez de la conexión humana no solo pueden,
                    sino que deben coexistir. 
                    {/* Aspiramos a un futuro donde las
                    grandes ideas no mueran por barreras técnicas o económicas,
                    y donde el talento sea reconocido globalmente por su
                    creatividad, su excelencia y su capacidad única para innovar
                    con un enfoque humano. Queremos ser el catalizador que
                    conecte esas ideas con el mundo. */}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                className="w-full rounded-2xl shadow-2xl shadow-purple-500/20"
                alt="Equipo de October Labs IO colaborando en un proyecto tecnológico en una oficina moderna"
                src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
