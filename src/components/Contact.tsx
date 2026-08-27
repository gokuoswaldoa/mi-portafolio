"use client";

import { motion } from "framer-motion";
import { Mail, Phone, FileText, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 px-4 bg-black border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Trabajamos <span className="text-cyan-400">Juntos?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Actualmente estoy disponible para nuevos proyectos. Si tienes un negocio que necesita digitalizarse o buscas un desarrollador apasionado para tu equipo, no dudes en contactarme.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:oswaldodavi_13@hotmail.com" 
              className="flex items-center gap-3 bg-gray-900 hover:bg-cyan-900/30 border border-gray-800 hover:border-cyan-500/50 text-white px-8 py-4 rounded-full transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>oswaldodavi_13@hotmail.com</span>
            </a>
            
            <a 
              href="tel:7772872695" 
              className="flex items-center gap-3 bg-gray-900 hover:bg-cyan-900/30 border border-gray-800 hover:border-cyan-500/50 text-white px-8 py-4 rounded-full transition-all duration-300 group w-full sm:w-auto justify-center"
            >
              <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>777 287 2695</span>
            </a>

            <a 
              href="/CV_Oswaldo_Davila.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800 hover:border-cyan-400 text-cyan-300 hover:text-white px-8 py-4 rounded-full transition-all duration-300 group w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
              <FileText className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Abrir mi CV</span>
            </a>
          </div>

          <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Oswaldo Dávila. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/oswaldoj.13?igsi=MWIybjNuaXYzamM4MA%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-pink-500 hover:bg-gray-800 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
