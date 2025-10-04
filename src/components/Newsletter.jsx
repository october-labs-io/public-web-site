import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "🚧 Esta función aún no está implementada",
        description:
          "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="text-white">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Únete a Nuestra Comunidad
                </h2>
                <p className="text-lg text-amber-50 leading-relaxed">
                  Recibe contenido exclusivo, tips de emprendimiento y
                  actualizaciones sobre nuevos lanzamientos directamente en tu
                  inbox.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-amber-50">
                      Contenido semanal exclusivo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-amber-50">
                      Recursos gratuitos descargables
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-amber-50">
                      Acceso anticipado a nuevos libros
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Tu correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Suscribirme Ahora
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    No spam. Cancela tu suscripción en cualquier momento.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
