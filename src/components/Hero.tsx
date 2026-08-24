"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4">
      {/* Fondo Interactivo */}
      <ParticleBackground />
      
      {/* Contenido Principal */}
      <div className="z-10 text-center max-w-5xl mx-auto flex flex-col items-center mt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-6"
        >
          Hola, soy Oswaldo
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold text-white tracking-tighter leading-[1.05] mb-8"
        >
          Desarrollador Web <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            & UI/UX
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl font-light mb-12"
        >
          Especialista en Ciencia de Datos enfocado en encontrar soluciones de negocio escalables a través de herramientas web modernas.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#sobre-mi"
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            Explorar mis proyectos
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
