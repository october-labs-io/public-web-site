import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Purchase = () => {
  const packages = [
    {
      name: "Digital",
      price: "29.99",
      popular: false,
      features: [
        "Libro digital en PDF",
        "Acceso inmediato",
        "Actualizaciones gratuitas",
        "Soporte por email",
      ],
    },
    {
      name: "Premium",
      price: "49.99",
      popular: true,
      features: [
        "Libro digital + físico",
        "Envío gratis",
        "Workbook descargable",
        "Plantillas y recursos",
        "Acceso a comunidad privada",
        "Sesión de mentoría grupal",
      ],
    },
    {
      name: "Masterclass",
      price: "99.99",
      popular: false,
      features: [
        "Todo lo de Premium",
        "Curso online exclusivo (8 horas)",
        "Sesión 1-on-1 con el autor",
        "Certificado de finalización",
        "Acceso de por vida",
        "Networking con otros emprendedores",
      ],
    },
  ];

  const handlePurchase = (packageName) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description:
        "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀",
    });
  };

  return (
    <section
      id="purchase"
      className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elige Tu Paquete
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Invierte en tu futuro emprendedor hoy mismo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                pkg.popular
                  ? "bg-white shadow-2xl scale-105 border-4 border-amber-400"
                  : "bg-white/95 shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    MÁS POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${pkg.price}
                  </span>
                  <span className="text-gray-600">USD</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePurchase(pkg.name)}
                className={`w-full py-6 rounded-xl font-bold text-lg ${
                  pkg.popular
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Comprar Ahora
              </Button>
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
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-white text-lg">
              🔒 Pago 100% seguro • 💯 Garantía de satisfacción de 30 días • 📚
              Acceso inmediato
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Purchase;
