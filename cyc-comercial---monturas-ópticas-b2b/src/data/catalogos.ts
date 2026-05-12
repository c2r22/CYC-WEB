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
    imagenPortada: '/webacetato.webp',
    linkPdf: '#',
  },
  {
    id: 'metal-trend',
    titulo: 'Línea Metal',
    categoria: 'Metal',
    imagenPortada: '/webmetal.webp',
    linkPdf: '#',
  },
  {
    id: 'tr90-sport',
    titulo: 'TR90',
    categoria: 'TR90',
    imagenPortada: '/webtr90.webp',
    linkPdf: '#',
  },
  {
    id: 'premium-gold',
    titulo: 'Edición Limitada Premium',
    categoria: 'Premium',
    imagenPortada: '/webexclusivo.webp',
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
