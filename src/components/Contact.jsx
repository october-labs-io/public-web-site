import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "🚀 ¡Sent!",
        description: "Thanks for reaching out. We'll get in touch soon, like really really soon...",
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: "🚧 Formulario incompleto",
        description: "Please, fill all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s talk...
            {/*We’re curious, and we want to listen...*/}
            {/*Hablemos de tus ideas...*/}
          </h2>
          <p className="text-xl text-gray-400">
            Send a few lines, and we’ll connect to explore next steps together.
            {/*¿Listo para empezar? Completa el formulario y nuestro equipo se pondrá en contacto contigo.*/}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-2xl shadow-purple-500/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-0 text-white transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-0 text-white transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share some thougths and ideas..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-0 text-white transition-colors"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-purple-500/20 text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Start building your dreams
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;