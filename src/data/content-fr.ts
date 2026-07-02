import type { ContentPage } from "./content";

export const contentPagesFr: Record<string, ContentPage> = {
  "about-us": {
    title: "À Propos de Nous",
    breadcrumb: "À Propos",
    sections: [
      {
        type: "paragraph",
        text: "Nous sommes une marque indienne de streetwear haut de gamme créant des vêtements de qualité artisanale pour les audacieux.",
        bold: true,
      },
      {
        type: "paragraph",
        text: "Chaque pièce de notre collection est cousue et sérigraphiée artisanalement, conçue par des mains humaines, et non par des machines. Nous croyons en la force du savoir-faire artisanal et aux histoires que chaque vêtement raconte.",
      },
      { type: "heading", text: "Notre Mission" },
      {
        type: "paragraph",
        text: "Fournir des vêtements streetwear de qualité supérieure à des prix accessibles. Nous utilisons du coton 100% bio-lavé premium, des tissus certifiés coton biologique GOTS et des pratiques de fabrication durables.",
      },
      { type: "heading", text: "Fabriqué en Inde" },
      {
        type: "paragraph",
        text: "Tous nos produits sont fièrement conçus et fabriqués en Inde par Vultures Clothing Headquarters, Mumbai. Nous soutenons les artisans locaux qui donnent vie à nos créations.",
      },
      { type: "heading", text: "Promesse de Qualité" },
      {
        type: "list",
        items: [
          "Coton Bio-lavé Premium 100%",
          "Polaire en Coton Brossé Épais",
          "Certifié Coton Biologique GOTS",
          "Tissu Bio-lavé | Peigné | Hypoallergénique",
          "Cousu et sérigraphié artisanalement",
        ],
      },
      { type: "heading", text: "Nous Contacter" },
      {
        type: "html",
        html: 'Des questions? Contactez-nous à <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
    ],
  },
  "privacy-policy": {
    title: "Politique de Confidentialité",
    breadcrumb: "Confidentialité",
    sections: [
      {
        type: "paragraph",
        text: "Votre confidentialité est importante pour nous. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.",
      },
      { type: "heading", text: "Informations que nous collectons" },
      {
        type: "paragraph",
        text: "Nous pouvons collecter des informations personnelles lors de vos achats (nom, adresse, email). Nous ne stockons pas de données bancaires sur nos serveurs.",
      },
      { type: "heading", text: "Contact" },
      {
        type: "html",
        html: 'Pour des questions sur cette politique, contactez-nous à <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
    ],
  },
  "terms-of-service": {
    title: "Conditions de Service",
    breadcrumb: "Conditions",
    sections: [
      {
        type: "paragraph",
        text: "Bienvenue dans notre boutique. En utilisant notre site web, vous acceptez d'être lié par ces termes et conditions.",
      },
      { type: "heading", text: "1. Général" },
      {
        type: "paragraph",
        text: 'Ce site web est exploité par Vultures Clothing Headquarters.',
      },
    ],
  },
  "return-policy": {
    title: "Politique de Retour",
    breadcrumb: "Retours",
    sections: [
      {
        type: "paragraph",
        text: "Si vous n'êtes pas satisfait, vous pouvez retourner le produit dans les 7 jours.",
      },
      { type: "heading", text: "Comment Retourner" },
      {
        type: "list",
        items: [
          "Contactez-nous à support@vultures.store avec votre numéro de commande",
          "Notre équipe vous fournira les instructions",
          "Emballez l'article dans son emballage d'origine",
        ],
      },
    ],
  },
  "refund-policy": {
    title: "Politique de Remboursement",
    breadcrumb: "Remboursements",
    sections: [
      {
        type: "paragraph",
        text: "Une fois votre retour reçu et inspecté, nous traiterons votre remboursement.",
      },
    ],
  },
  "shipping-policy": {
    title: "Politique d'Expédition",
    breadcrumb: "Expédition",
    sections: [
      {
        type: "paragraph",
        text: "Toutes les commandes sont traitées dans un délai de 1 à 2 jours ouvrables.",
      },
      { type: "heading", text: "Tarifs et Estimations" },
      {
        type: "list",
        items: [
          "Standard : 3-5 jours (Gratuit pour les commandes > ₹1499)",
          "Express : 1-2 jours (₹150)",
        ],
      },
    ],
  },
  "exchange-policy": {
    title: "Politique d'Échange",
    breadcrumb: "Échanges",
    sections: [
      {
        type: "paragraph",
        text: "Un problème de taille ? Aucun souci. Nous vous aiderons à trouver la bonne taille.",
      },
      { type: "heading", text: "Processus d'Échange" },
      {
        type: "list",
        items: [
          "Demandez un échange dans les 7 jours",
          "L'article doit être inutilisé",
        ],
      },
    ],
  },
  policies: {
    title: "Politiques",
    breadcrumb: "Politiques",
    sections: [
      {
        type: "paragraph",
        text: "Chez Vultures, nous croyons en la transparence.",
      },
    ],
  },
  partner: {
    title: "Devenir Partenaire",
    breadcrumb: "Partenaires",
    sections: [
      {
        type: "paragraph",
        text: "Rejoignez la famille Vultures.",
      },
      { type: "heading", text: "Contact" },
      {
        type: "html",
        html: 'Envoyez-nous un e-mail à <a href="mailto:partners@vultures.store" class="text-[#9a1818] hover:underline">partners@vultures.store</a>',
      },
    ],
  },
};
