import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Preview = () => {
  const [selectedChapter, setSelectedChapter] = useState(0);

  const chapters = [
    {
      number: 1,
      title: "El Mindset del Emprendedor",
      preview:
        "Descubre cómo cultivar la mentalidad necesaria para enfrentar los desafíos del mundo digital. Aprenderás a transformar el miedo al fracaso en combustible para el éxito.",
    },
    {
      number: 2,
      title: "Validación de Ideas",
      preview:
        "No todas las ideas son buenas ideas de negocio. Aprende técnicas probadas para validar tu concepto antes de invertir tiempo y dinero en su desarrollo.",
    },
    {
      number: 3,
      title: "MVP y Desarrollo Ágil",
      preview:
        "Construye tu Producto Mínimo Viable de manera eficiente. Descubre cómo iterar rápidamente basándote en feedback real de usuarios.",
    },
    {
      number: 4,
      title: "Growth Hacking",
      preview:
        "Estrategias creativas y de bajo costo para hacer crecer tu startup exponencialmente. Casos de estudio de empresas que crecieron de 0 a millones.",
    },
    {
      number: 5,
      title: "Captación de Inversión",
      preview:
        "Aprende a preparar tu pitch, conectar con inversores y cerrar rondas de financiación exitosas para escalar tu negocio.",
    },
  ];

  const handleDownloadSample = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description:
        "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀",
    });
  };

  return (
    <section
      id="preview"
      className="py-20 bg-gradient-to-br from-gray-50 to-amber-50"
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
            Vista Previa de Capítulos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora el contenido que transformará tu visión emprendedora
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedChapter(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  selectedChapter === index
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        selectedChapter === index
                          ? "bg-white text-amber-600"
                          : "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                      }`}
                    >
                      {chapter.number}
                    </div>
                    <h3
                      className={`font-bold text-lg ${
                        selectedChapter === index
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {chapter.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 ${
                      selectedChapter === index ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChapter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <span className="text-amber-600 font-semibold text-sm">
                    CAPÍTULO {chapters[selectedChapter].number}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                    {chapters[selectedChapter].title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {chapters[selectedChapter].preview}
                </p>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    En este capítulo aprenderás:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Conceptos fundamentales y frameworks prácticos
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Casos de estudio de empresas reales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Ejercicios prácticos para aplicar inmediatamente
                      </span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleDownloadSample}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-6 rounded-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar Muestra Gratis
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
