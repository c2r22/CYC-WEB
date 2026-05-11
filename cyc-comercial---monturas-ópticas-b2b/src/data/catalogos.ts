export interface Catalogo {
  id: string;
  titulo: string;
  categoria: 'Acetato' | 'Metal' | 'TR90' | 'Premium' | 'Novedades';
  imagenPortada: string;
  colorHex?: string;
  linkPdf: string;
}

export const CATALOGOS: Catalogo[] = [
  {
    id: 'acetato-2024',
    titulo: 'Colección Acetato Classic',
    categoria: 'Acetato',
    imagenPortada: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop',
    linkPdf: '#',
  },
  {
    id: 'metal-trend',
    titulo: 'Línea Metal Ultra-Light',
    categoria: 'Metal',
    imagenPortada: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    linkPdf: '#',
  },
  {
    id: 'tr90-sport',
    titulo: 'Resistencia TR90 Flex',
    categoria: 'TR90',
    imagenPortada: 'https://images.unsplash.com/photo-1509100104048-6373f65cd45e?q=80&w=800&auto=format&fit=crop',
    linkPdf: '#',
  },
  {
    id: 'premium-gold',
    titulo: 'Edición Limitada Premium',
    categoria: 'Premium',
    imagenPortada: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop',
    linkPdf: '#',
  },
  {
    id: 'new-arrivals',
    titulo: 'Nuevos Ingresos Mayo',
    categoria: 'Novedades',
    imagenPortada: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    linkPdf: '#',
  }
];

export const WHATSAPP_NUMBER = "50581061859";
export const WHATSAPP_MESSAGE = "Hola CYC Comercial, me gustaría ver el catálogo actualizado y recibir información.";
