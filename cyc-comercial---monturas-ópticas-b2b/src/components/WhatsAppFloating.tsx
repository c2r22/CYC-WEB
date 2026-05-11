import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/catalogos';

const WhatsAppFloating = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="no-referrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center group pointer-events-auto cursor-pointer"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:w-32 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 font-bold">
        ¿Necesitas ayuda?
      </span>
    </motion.a>
  );
};

export default WhatsAppFloating;
