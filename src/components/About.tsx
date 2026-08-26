"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { TrendingUp, Clock, ShieldCheck, Smartphone } from 'lucide-react';

const techStack = [
  { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
];

const businessBenefits = [
  { name: "MÁS VENTAS", desc: "Diseños optimizados para convertir visitantes en clientes.", icon: TrendingUp, color: "text-green-400" },
  { name: "AHORRO DE TIEMPO", desc: "Automatiza reservaciones, inventarios y atención.", icon: Clock, color: "text-cyan-400" },
  { name: "100% MÓVIL", desc: "Tus clientes te verán perfecto desde cualquier celular.", icon: Smartphone, color: "text-pink-400" },
  { name: "CONFIANZA", desc: "Proyecta una imagen profesional y de alta gama.", icon: ShieldCheck, color: "text-purple-400" },
];

interface AboutProps {
  variant?: "business" | "tech";
}

export default function About({ variant = "business" }: AboutProps) {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center md:text-left">
            Sobre <span className="text-cyan-400">Mí</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              <p>
                ¡Hola! Soy <strong className="text-white font-medium">Oswaldo</strong>. 
                Estudié en el <span className="text-cyan-400">Instituto Tecnológico de Zacatepec</span> con 
                la especialidad en Ciencia de Datos.
              </p>
              <p>
                Me dedico a encontrar <strong className="text-white font-medium">soluciones precisas y escalables</strong> mediante 
                las mejores herramientas web del mercado. 
              </p>
              <p>
                Mi enfoque no es solo escribir código, sino entender el problema central de cada negocio 
                y construir plataformas que realmente aporten valor, ya sea automatizando procesos internos o 
                atrayendo más clientes.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2">
              {variant === "tech" ? (
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-cyan-500"></span>
                    Stack Tecnológico
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                    {techStack.map((tech, idx) => (
                    <motion.div 
                      key={tech.name} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="relative p-[2px] bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl group hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
                    >
                      <div className="flex flex-col items-center justify-center bg-[#0a0a0a] rounded-xl p-6 h-full transition-colors duration-300 group-hover:bg-[#111]">
                        <tech.icon className={`w-12 h-12 mb-4 ${tech.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">{tech.name}</span>
                      </div>
                    </motion.div>
                  ))}
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {businessBenefits.map((benefit, idx) => (
                    <motion.div 
                      key={benefit.name} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      <benefit.icon className={`w-10 h-10 mb-4 ${benefit.color}`} />
                      <h3 className="text-white font-bold text-lg mb-2 tracking-wide">{benefit.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
