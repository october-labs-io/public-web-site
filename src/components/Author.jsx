import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const Author = () => {
  const achievements = [
    { icon: Award, label: '3 Startups Exitosas', value: 'Fundadas' },
    { icon: BookOpen, label: '5 Libros', value: 'Publicados' },
    { icon: Users, label: '100K+', value: 'Estudiantes' },
    { icon: TrendingUp, label: '$50M+', value: 'Recaudados' }
  ];

  return (
    <section id="author" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre el Autor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce al emprendedor y mentor detrás de este libro transformador
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                className="w-full rounded-2xl shadow-2xl"
                alt="Foto profesional del autor Carlos Mendoza"
               src="https://images.unsplash.com/photo-1613186267015-46dc938f2b8f" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Carlos Mendoza</h3>
              <p className="text-xl text-amber-600 font-semibold">Emprendedor Serial & Mentor de Startups</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Con más de 15 años de experiencia en el ecosistema tecnológico, Carlos ha fundado tres startups exitosas que han revolucionado sus respectivas industrias.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Su pasión por compartir conocimiento lo ha llevado a mentorear a cientos de emprendedores y a escribir cinco bestsellers sobre tecnología y negocios.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
              <p className="text-gray-800 italic">
                "Mi misión es democratizar el conocimiento sobre emprendimiento tecnológico y ayudar a la próxima generación de innovadores a alcanzar su máximo potencial."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-lg border border-amber-100"
                >
                  <achievement.icon className="w-8 h-8 text-amber-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{achievement.value}</p>
                  <p className="text-sm text-gray-600">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Author;