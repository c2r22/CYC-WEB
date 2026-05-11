import React from 'react';
import { Eye, MessageSquare, Truck } from 'lucide-react';
import { FadeIn } from './FadeIn';

const PasosComprar = () => {
  const pasos = [
    {
      icon: <Eye className="w-8 h-8" />,
      titulo: "Explora el Catálogo",
      desc: "Navega por nuestras categorías de Acetato, Metal y TR90 para elegir los modelos que tu óptica necesita."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      titulo: "Escribe por WhatsApp",
      desc: "Envíanos los códigos o capturas de tu selección para confirmar stock y precios por volumen."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      titulo: "Recibe tu Pedido",
      desc: "Realizamos envios certificados en 24-48 horas directamente a la puerta de tu local."
    }
  ];

  return (
    <section id="como-comprar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Sencillo, rápido y confiable</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Pensado para dueños de ópticas que no tienen tiempo que perder.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12">
          {pasos.map((paso, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up" className="relative">
              <div className="group p-10 rounded-3xl bg-gray-50 hover:bg-primary transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                  {paso.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{paso.titulo}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors">{paso.desc}</p>
                
                {index < 2 && (
                   <div className="hidden lg:block absolute top-1/2 -right-6 translate-y-[-50%] z-10 opacity-20">
                     <div className="w-12 h-0.5 bg-gray-400" />
                   </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PasosComprar;
