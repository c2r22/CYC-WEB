import React from 'react';
import { ShoppingBag, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/catalogos';

const Hero = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
               Distribución Exclusiva para Ópticas
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Monturas que <br />
              <span className="text-primary italic">elevan</span> tu óptica.
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Distribuidor mayorista. Modelos exclusivos, stock permanente y envíos rápidos a todo el país.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4">
            <a href="#catalogos" className="btn-primary group">
              Ver Catálogos 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={whatsappLink} target="_blank" rel="no-referrer" className="btn-secondary">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Directo
            </a>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.6} className="flex items-center gap-6 pt-4 border-t border-gray-200">
            <div>
              <p className="text-2xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Modelos</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-gray-900">24h</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Envío Promedio</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Soporte B2B</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={0.3} className="relative hidden md:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl scale-105 transform hover:scale-110 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop" 
              alt="Model wearing designer frames" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          {/* Glass Card Floating */}
          <div className="absolute bottom-10 -left-10 z-20 glass-morphism p-6 rounded-2xl shadow-xl max-w-[200px]">
            <p className="text-sm font-medium text-primary">Actualización Semanal</p>
            <p className="text-xs text-gray-500 mt-1">Nuevos ingresos de importación directa.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
