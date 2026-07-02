import type { ContentPage } from "./content";

export const contentPagesEs: Record<string, ContentPage> = {
  "about-us": {
    title: "Sobre Nosotros",
    breadcrumb: "Sobre Nosotros",
    sections: [
      {
        type: "paragraph",
        text: "Somos una marca de streetwear indio de primera calidad que crea ropa de calidad artesanal para los valientes.",
        bold: true,
      },
      {
        type: "paragraph",
        text: "Cada pieza de nuestra colección está cosida y serigrafiada artesanalmente, elaborada por manos humanas, no por máquinas.",
      },
      { type: "heading", text: "Nuestra Misión" },
      {
        type: "paragraph",
        text: "Ofrecer streetwear de calidad premium a precios accesibles. Utilizamos algodón premium 100% biológico.",
      },
      { type: "heading", text: "Hecho en India" },
      {
        type: "paragraph",
        text: "Todos nuestros productos están diseñados y fabricados en India por Vultures Clothing Headquarters, Mumbai.",
      },
      { type: "heading", text: "Promesa de Calidad" },
      {
        type: "list",
        items: [
          "Algodón Premium 100%",
          "Tejido Hipoalergénico",
          "Certificación GOTS",
        ],
      },
      { type: "heading", text: "Contáctanos" },
      {
        type: "html",
        html: '¿Preguntas? Escríbenos a <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
    ],
  },
  "privacy-policy": {
    title: "Política de Privacidad",
    breadcrumb: "Privacidad",
    sections: [
      {
        type: "paragraph",
        text: "Su privacidad es importante para nosotros.",
      },
      { type: "heading", text: "Contacto" },
      {
        type: "html",
        html: 'Contáctanos en <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
    ],
  },
  "terms-of-service": {
    title: "Términos de Servicio",
    breadcrumb: "Términos",
    sections: [
      {
        type: "paragraph",
        text: "Bienvenido a nuestra tienda. Al usar nuestro sitio web, aceptas estos términos y condiciones.",
      },
      { type: "heading", text: "1. General" },
      {
        type: "paragraph",
        text: 'Este sitio web es operado por Vultures Clothing Headquarters.',
      },
    ],
  },
  "return-policy": {
    title: "Política de Devolución",
    breadcrumb: "Devoluciones",
    sections: [
      {
        type: "paragraph",
        text: "Los artículos pueden devolverse dentro de los 7 días posteriores a la entrega.",
      },
    ],
  },
  "refund-policy": {
    title: "Política de Reembolso",
    breadcrumb: "Reembolsos",
    sections: [
      {
        type: "paragraph",
        text: "Una vez que se reciba e inspeccione su devolución, procesaremos su reembolso.",
      },
    ],
  },
  "shipping-policy": {
    title: "Política de Envío",
    breadcrumb: "Envío",
    sections: [
      {
        type: "paragraph",
        text: "Todos los pedidos se procesan dentro de 1 a 2 días hábiles.",
      },
    ],
  },
  "exchange-policy": {
    title: "Política de Intercambio",
    breadcrumb: "Intercambio",
    sections: [
      {
        type: "paragraph",
        text: "¿Problema de tamaño? No hay problema. Aseguraremos de que consigas la talla correcta.",
      },
    ],
  },
  policies: {
    title: "Políticas",
    breadcrumb: "Políticas",
    sections: [
      {
        type: "paragraph",
        text: "En Vultures, creemos en la transparencia.",
      },
    ],
  },
  partner: {
    title: "Asociarse con Nosotros",
    breadcrumb: "Socios",
    sections: [
      {
        type: "paragraph",
        text: "Únete a la familia Vultures.",
      },
      { type: "heading", text: "Contacto" },
      {
        type: "html",
        html: 'Envíanos un correo electrónico a <a href="mailto:partners@vultures.store" class="text-[#9a1818] hover:underline">partners@vultures.store</a>',
      },
    ],
  },
};
