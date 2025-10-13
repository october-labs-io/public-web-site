import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import barracaUnoLogo from "../assets/barraca_uno.svg";
import bisnextLogo from "../assets/bisnext.svg";
import sendaLogo from "../assets/senda.svg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Inés Fumagalli",
      role: "CEO, Barraca UNO",
      title: "They don't just understand AI, they understand people.",
      text: "We had many doubts about how to start our digital transformation, but the team made everything very simple. With a unique closeness and clarity, they demystified artificial intelligence and showed us how to apply it practically to our real problems.",
      image: barracaUnoLogo
    },
    {
      name: "Mauricio Rostán",
      role: "Director, Bisnext",
      title: "More than a vendor, a true strategic partner.",
      text: "We had worked with several software agencies before, but we always felt like we were speaking different languages. With October Labs, we found a team that not only masters AI technology but also dove deep into our business to understand our challenges. Their approach allowed us to launch our project in record time and on a much smaller budget than we had estimated.",
      image: bisnextLogo
    },
    {
      name: "Santiago Halty",
      role: "CEO, Senda Athletics",
      title: "Tangible results and efficiency, right from the start.",
      text: "Working with October Labs has been a game-changer for Senda. They helped us understand the AI potential, align them with our mission, and take concrete steps toward real digital transformation. They met us where we were, challenged our thinking with empathy, and turned complex data conversations into clear, actionable insights.",
      image:sendaLogo
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
            In Their Words
            {/*Lo que dicen nuestros clientes*/}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We build lasting relationships, rooted in trust, professionalism and proven by results.
            {/*Construimos relaciones duraderas basadas en la confianza y los resultados.*/}
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
              <h1 className="text-2xl md:text-2xl font-extrabold mb-6 leading-tight ">
                {testimonial.title}
              </h1>
              <p className="text-gray-300 leading-relaxed flex-grow mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  alt={`Foto de ${testimonial.name}`}
                  // src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                  src={testimonial.image}
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
