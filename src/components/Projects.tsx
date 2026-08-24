"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Mancaps",
    description: "Catálogo dinámico B2B desarrollado para un vendedor de mayoreo con alta rotación de productos. Se reemplazó el envío manual de fotos con un sistema web integral, permitiendo la gestión de categorías, tallas y stock en tiempo real.",
    tech: ["Next.js", "Base de Datos", "Autenticación", "Panel Admin"],
    link: "https://www.mancapsmx.com/",
    type: "Tienda Catálogo",
    image: "/material/proyectos/tienda-catalogo/1.png"
  },
  {
    title: "Dentista Cuernavaca",
    description: "Una página web profesional diseñada para una doctora dentista. Enfocada en la conversión, cuenta la historia de la profesional, detalla sus servicios médicos y culmina en un formulario interactivo para agendar citas directamente.",
    tech: ["React", "UI/UX", "Formularios Dinámicos"],
    link: "https://dentista-cuernavaca-webapp.vercel.app/",
    type: "Landing Page & Reservas",
    image: "/material/proyectos/consultorio/1.png"
  },
  {
    title: "Cachito de Cielo",
    description: "Tienda de postres en línea diseñada para captar la atención con un estilo visual delicioso y atractivo. Permite explorar el menú de productos y hacer pedidos fácilmente, optimizada para ofrecer la mejor experiencia al cliente.",
    tech: ["React", "Diseño Web", "Optimización"],
    link: "https://cachito-de-cieloo.netlify.app/",
    type: "E-commerce & Catálogo",
    image: "/material/proyectos/tienda-postres/1.png"
  },
  {
    title: "Business Intelligence Dashboard",
    description: "Plataforma de análisis de datos B2B que centraliza múltiples fuentes de información para visualizar KPIs de ventas, rendimiento de inventario y tendencias de clientes en tiempo real.",
    tech: ["Python", "Data Science", "SQL", "React"],
    link: "#",
    type: "Data Science & Analítica",
    image: "/dashboard-mockup.jpg"
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 px-4 bg-[#030303]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Proyectos <span className="text-cyan-400">Destacados</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
            Soluciones web que resuelven problemas de negocio reales, con diseños atractivos y funcionales.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center"
            >
              {/* Contenido del texto */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <p className="text-cyan-400 font-mono text-sm tracking-wider mb-2 uppercase">{project.type}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{project.title}</h3>
                
                <div className="bg-black/50 border border-gray-800 p-6 md:p-8 rounded-2xl mb-6 relative z-10 backdrop-blur-sm">
                  <p className="text-gray-300 text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <li key={i} className="text-gray-400 font-mono text-sm bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">
                      {t}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium">
                    <ExternalLink className="w-5 h-5" />
                    Ver Demo
                  </a>
                </div>
              </div>

              {/* Imagen del Proyecto */}
              <div className={`w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-cyan-500/30 transition-colors duration-500 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
