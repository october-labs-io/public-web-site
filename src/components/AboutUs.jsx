import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users } from 'lucide-react';

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
              Somos el motor de tu innovación
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              En Quantum IO, somos un equipo de apasionados por la tecnología, dedicados a resolver problemas complejos con soluciones elegantes y eficientes. Nuestra misión es ser tu socio estratégico en el camino hacia la transformación digital.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full mt-1">
                  <Rocket className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nuestra Misión</h3>
                  <p className="text-gray-400">Empoderar a las empresas con tecnología de vanguardia para que alcancen su máximo potencial.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full mt-1">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nuestra Visión</h3>
                  <p className="text-gray-400">Ser líderes en innovación tecnológica, creando un futuro más inteligente y conectado.</p>
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
                alt="Equipo de Quantum IO colaborando en un proyecto tecnológico en una oficina moderna"
               src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d" />
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