import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Hablemos de tu <br />
                <span className="text-primary italic">próximo stock</span>.
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-md">
                Estamos listos para surtir tu óptica con lo último en tendencias. 
                Envíanos un mensaje y te responderemos en minutos.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="up" delay={0.2} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Llámanos</p>
                  <p className="text-xl font-bold text-gray-900">+505 8106-1859</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Escríbenos</p>
                  <p className="text-xl font-bold text-gray-900">ventas@cyccomercial.com</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Oficina Central</p>
                  <p className="text-xl font-bold text-gray-900">Managua, Ciudad Jardín, 1 c al lago, Nicaragua</p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="left" delay={0.5}>
            <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative z-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Tu Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Juan Pérez"
                      className="bg-white border-2 border-gray-100 rounded-2xl p-4 focus:border-primary outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Nombre de Óptica</label>
                    <input 
                      type="text" 
                      placeholder="Óptica Mi Visión"
                      className="bg-white border-2 border-gray-100 rounded-2xl p-4 focus:border-primary outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="juan@correo.com"
                    className="bg-white border-2 border-gray-100 rounded-2xl p-4 focus:border-primary outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Asunto del Pedido</label>
                  <select className="bg-white border-2 border-gray-100 rounded-2xl p-4 focus:border-primary outline-none transition-all duration-300 appearance-none">
                    <option>Consultar Catálogo Completo</option>
                    <option>Solicitar Visita del Asesor</option>
                    <option>Estado de Pedido Actual</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Mensaje</label>
                  <textarea 
                    rows={4} 
                    placeholder="¿Cómo podemos ayudarte?"
                    className="bg-white border-2 border-gray-100 rounded-2xl p-4 focus:border-primary outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-lg">
                  Enviar Mensaje
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Contacto;
