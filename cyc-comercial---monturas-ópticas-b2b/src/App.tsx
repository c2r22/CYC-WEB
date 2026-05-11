import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PasosComprar from './components/PasosComprar';
import Catalogos from './components/Catalogos';
import Contacto from './components/Contacto';
import WhatsAppFloating from './components/WhatsAppFloating';
import { ShoppingBag, Instagram, Facebook, Linkedin } from 'lucide-react';
import { FadeIn } from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PasosComprar />
        <Catalogos />

        {/* Sección de Confianza / Beneficios */}
        <section id="confianza" className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Más que un proveedor, <br />
                  <span className="text-accent underline decoration-white/20 underline-offset-8">tu socio comercial.</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-white/20 pl-6">
                    <p className="text-xl font-bold mb-2">Asesoría B2B</p>
                    <p className="text-white/70">Expertos en mercado óptico te ayudan a elegir el mix de productos ganador para tu local.</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-6">
                    <p className="text-xl font-bold mb-2">Stock Real</p>
                    <p className="text-white/70">Sistema en tiempo real. Si está en el catálogo, lo tenemos listo para despacho inmediato.</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-6">
                    <p className="text-xl font-bold mb-2">Garantía Total</p>
                    <p className="text-white/70">Cambios directos por defectos de fábrica en menos de 7 días. Cero riesgos para ti.</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-6">
                    <p className="text-xl font-bold mb-2">Pagos Flexibles</p>
                    <p className="text-white/70">Múltiples métodos de pago corporativos y facturación inmediata.</p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" className="relative">
                <div className="rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop" 
                    alt="B2B Relationship" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 bg-accent p-8 rounded-full shadow-2xl hidden md:block">
                  <p className="text-3xl font-black text-white text-center">98%</p>
                  <p className="text-[10px] text-white/80 uppercase font-black tracking-tighter">Fidelidad de Clientes</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Contacto />

        {/* Google Maps Section Embebed Simple */}
        <section className="h-[400px] w-full grayscale contrast-125 opacity-40 hover:opacity-100 transition-opacity duration-300">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.621415250081!2d-86.25776269999999!3d12.1528659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fe0d998d30e1%3A0xe9f7f9076f8c7924!2sCiudad%20Jardin%2C%20Managua%2C%20Nicaragua!5e0!3m2!1ses!2sni!4v1715272089456!5m2!1ses!2sni" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <ShoppingBag className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">CYC Comercial</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Distribuidora mayorista de monturas ópticas. 
                Calidad premium, precios de fábrica y atención personalizada en toda Nicaragua.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Navegación</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#como-comprar" className="hover:text-white transition-colors">Cómo Comprar</a></li>
                <li><a href="#catalogos" className="hover:text-white transition-colors">Catálogos</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Horarios</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Lun - Vie: 9am - 6pm</li>
                <li>Sábados: 9am - 1pm</li>
                <li>Domingos: Cerrado</li>
                <li className="pt-4 text-primary font-bold">Atención WhatsApp 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} CYC Comercial. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloating />
    </div>
  );
}

export default App;
