import React, { useState } from 'react';
import { Download, MessageCircle, ArrowUpRight } from 'lucide-react';
import { CATALOGOS, Catalogo } from '../data/catalogos';
import { FadeIn } from './FadeIn';

const Catalogos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const categorias = ['Todos', 'Acetato', 'Metal', 'TR90', 'Premium', 'Novedades'];

  const filteredCatalogos = selectedCategory === 'Todos' 
    ? CATALOGOS 
    : CATALOGOS.filter(c => c.categoria === selectedCategory);

  return (
    <section id="catalogos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Diseño de vanguardia <br /> para tu exhibidor.
            </h2>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="flex flex-wrap gap-2">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat 
                    ? 'bg-primary text-white shadow-md scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCatalogos.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1} className="group">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 p-4 border border-gray-100 flex flex-col h-full">
                <div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
                  <img 
                    src={item.imagenPortada} 
                    alt={item.titulo} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold text-primary rounded-full shadow-sm">
                      {item.categoria}
                    </span>
                  </div>
                </div>

                <div className="px-2 pb-2 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-between">
                    {item.titulo}
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                  </h3>
                  
                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <a 
                      href={item.linkPdf} 
                      className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-primary hover:text-white py-3 rounded-2xl text-xs font-bold text-gray-700 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      VER PDF
                    </a>
                    <a 
                      href={`https://wa.me/50581061859?text=Hola, me interesa el catálogo de ${item.titulo}`}
                      target="_blank"
                      rel="no-referrer"
                      className="flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary hover:text-white py-3 rounded-2xl text-xs font-bold text-primary transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogos;
