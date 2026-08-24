"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, ShoppingCart, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Sitios Web & Landing Pages",
    description: "Diseño y desarrollo de páginas web ultra responsivas enfocadas en captar la atención de tus clientes y convertirlos. Ideal para clínicas, consultorios y negocios locales.",
    icon: MonitorSmartphone,
    color: "text-cyan-400"
  },
  {
    title: "Sistemas & E-commerce",
    description: "Creación de catálogos dinámicos y tiendas en línea a la medida. Plataformas autoadministrables para que tengas el control total de tu inventario y ventas sin complicaciones.",
    icon: ShoppingCart,
    color: "text-pink-500"
  },
  {
    title: "Ciencia & Análisis de Datos",
    description: "Transformo la información de tu negocio en decisiones inteligentes. Desarrollo dashboards interactivos para visualizar ventas, entender tendencias y optimizar tus procesos.",
    icon: BarChart3,
    color: "text-purple-500"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 px-4 bg-[#050505] border-y border-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ¿Cómo puedo <span className="text-cyan-400">ayudarte?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Soluciones tecnológicas adaptadas a la medida de tu negocio. Desde presencia digital hasta análisis profundo de tus datos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-[1px] bg-gradient-to-b from-gray-800 to-transparent hover:from-cyan-900/50 rounded-2xl transition-colors duration-500"
            >
              <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full flex flex-col items-start transition-transform duration-300 group-hover:-translate-y-2">
                <div className={`p-4 rounded-xl bg-black border border-gray-800 mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
