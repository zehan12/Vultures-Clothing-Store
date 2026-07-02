import { contentPagesHi } from './content-hi';
import { contentPagesFr } from './content-fr';
import { contentPagesEs } from './content-es';

export type ContentSection =
  | { type: "paragraph"; text: string; bold?: boolean }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "html"; html: string };

export type ContentPage = {
  title: string;
  breadcrumb: string;
  sections: ContentSection[];
};

export const contentPagesEn: Record<string, ContentPage> = {
  "about-us": {
    title: "About Us",
    breadcrumb: "About Us",
    sections: [
      {
        type: "paragraph",
        text: "We are a premium Indian streetwear brand crafting artisan-quality clothing for the bold and the fearless.",
        bold: true,
      },
      {
        type: "paragraph",
        text: "Every piece in our collection is artisan stitched and screen printed, crafted by human hands, not machines. We believe in the power of handmade craftsmanship and the stories that each garment tells.",
      },
      { type: "heading", text: "Our Mission" },
      {
        type: "paragraph",
        text: "To deliver premium quality streetwear at accessible prices. We use 100% Premium Biowashed Cotton, GOTS Organic Cotton Certified fabrics, and sustainable manufacturing practices.",
      },
      { type: "heading", text: "Made in India" },
      {
        type: "paragraph",
        text: "All our products are proudly designed and manufactured in India by Vultures Clothing Headquarters, Mumbai. We support local artisans and craftspeople who bring our designs to life.",
      },
      { type: "heading", text: "Quality Promise" },
      {
        type: "list",
        items: [
          "100% Premium Biowashed Cotton",
          "Heavy Weight Brushed Cotton Fleece",
          "GOTS Organic Cotton Certified",
          "Biowashed | Combed | Hypo-Allergic Fabric",
          "Artisan stitched and screen printed",
        ],
      },
      { type: "heading", text: "Contact Us" },
      {
        type: "html",
        html: 'Have questions? Reach out to us at <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    sections: [
      {
        type: "paragraph",
        text: "Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
      },
      { type: "heading", text: "Information We Collect" },
      {
        type: "paragraph",
        text: "We may collect personal information that you voluntarily provide to us when you make a purchase, including your name, email address, phone number, shipping address, and payment information. We do not store any UPI or card details on our servers.",
      },
      { type: "heading", text: "How We Use Your Information" },
      {
        type: "list",
        items: [
          "To process and fulfill your orders",
          "To send you order confirmations and shipping updates",
          "To improve our website and customer service",
          "To send promotional communications (with your consent)",
        ],
      },
      { type: "heading", text: "Data Security" },
      {
        type: "paragraph",
        text: "We implement appropriate security measures to protect your personal information. All payment transactions are processed through secure, encrypted UPI payment gateways.",
      },
      { type: "heading", text: "Third-Party Services" },
      {
        type: "paragraph",
        text: "We may use third-party services such as payment processors (PayU), analytics (Meta Pixel), and shipping providers. These services have their own privacy policies governing the use of your information.",
      },
      { type: "heading", text: "Contact" },
      {
        type: "html",
        html: 'For questions about this Privacy Policy, contact us at <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    breadcrumb: "Terms of Service",
    sections: [
      {
        type: "paragraph",
        text: "Welcome to our store. By accessing or using our website, you agree to be bound by these terms and conditions.",
      },
      { type: "heading", text: "1. General" },
      {
        type: "paragraph",
        text: 'This website is operated by Vultures Clothing Headquarters. Throughout the site, the terms "we", "us" and "our" refer to Vultures Clothing Headquarters. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.',
      },
      { type: "heading", text: "2. Online Store Terms" },
      {
        type: "paragraph",
        text: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.",
      },
      { type: "heading", text: "3. Products & Pricing" },
      {
        type: "paragraph",
        text: "Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.",
      },
    ],
  },
  "return-policy": {
    title: "Return Policy",
    breadcrumb: "Return Policy",
    sections: [
      {
        type: "paragraph",
        text: "We want you to be completely satisfied with your purchase. If you are not satisfied, you may return the product within the specified timeframe.",
      },
      { type: "heading", text: "Return Window" },
      {
        type: "paragraph",
        text: "Items can be returned within 7 days of delivery. The product must be unused, unwashed, and in its original packaging with all tags attached.",
      },
      { type: "heading", text: "Non-Returnable Items" },
      {
        type: "list",
        items: [
          "Items that have been washed, worn, or altered",
          "Items without original tags and packaging",
          "Sale or discounted items (final sale)",
          "Innerwear and accessories",
        ],
      },
      { type: "heading", text: "How to Return" },
      {
        type: "list",
        items: [
          "Contact us at support@vultures.store with your order ID",
          "Our team will provide return shipping instructions",
          "Pack the item securely in original packaging",
          "Ship the item back to us",
        ],
      },
      { type: "heading", text: "Return Shipping" },
      {
        type: "paragraph",
        text: "Return shipping costs are borne by the customer unless the item received was defective or incorrect.",
      },
    ],
  },
  "refund-policy": {
    title: "Refund Policy",
    breadcrumb: "Refund Policy",
    sections: [
      {
        type: "paragraph",
        text: "Once your return is received and inspected, we will notify you about the approval or rejection of your refund.",
      },
      { type: "heading", text: "Refund Processing" },
      {
        type: "list",
        items: [
          "Approved refunds will be processed within 5-7 business days",
          "Refunds will be credited to your original payment method (UPI/Bank Account)",
          "Bank processing may take an additional 3-5 business days",
        ],
      },
      { type: "heading", text: "Partial Refunds" },
      {
        type: "paragraph",
        text: "Partial refunds may be granted for items that are not in their original condition, are damaged, or have missing parts for reasons not due to our error.",
      },
      { type: "heading", text: "Exchanges" },
      {
        type: "html",
        html: 'We only replace items if they are defective or damaged. If you need to exchange for the same item in a different size, contact us at <a href="mailto:support@vultures.store" class="text-[#9a1818] hover:underline">support@vultures.store</a>',
      },
      { type: "heading", text: "Failed/Cancelled Payments" },
      {
        type: "paragraph",
        text: "If a payment fails or is cancelled, any debited amount will be automatically refunded to your account within 3-5 business days. If you do not receive the refund, please contact your bank or UPI provider.",
      },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    breadcrumb: "Shipping Policy",
    sections: [
      {
        type: "paragraph",
        text: "We offer FREE shipping on all orders across India. No minimum order value required.",
        bold: true,
      },
      { type: "heading", text: "Processing Time" },
      {
        type: "list",
        items: [
          "Orders are processed within 1-2 business days",
          "Pre-order items may take 7-15 business days to dispatch",
          "You will receive a tracking ID once your order is shipped",
        ],
      },
      { type: "heading", text: "Delivery Time" },
      {
        type: "list",
        items: [
          "Metro cities: 3-5 business days",
          "Tier 2 cities: 5-7 business days",
          "Remote areas: 7-10 business days",
        ],
      },
      { type: "heading", text: "Shipping Partners" },
      {
        type: "paragraph",
        text: "We ship through trusted courier partners including Delhivery, BlueDart, and India Post to ensure safe and timely delivery of your orders.",
      },
      { type: "heading", text: "Track Your Order" },
      {
        type: "html",
        html: 'You can track your order using the tracking ID provided via email/SMS on our <a href="/track-order" class="text-[#9a1818] hover:underline">Track Order</a> page.',
      },
    ],
  },
  "exchange-policy": {
    title: "Exchange Policy",
    breadcrumb: "Exchange Policy",
    sections: [
      {
        type: "paragraph",
        text: "We offer a hassle-free exchange policy. You can exchange your item within 7 days of delivery if the size doesn't fit or if you received a defective product.",
      },
      { type: "heading", text: "Exchange Conditions" },
      {
        type: "list",
        items: [
          "Items must be unused, unwashed, and have original tags attached.",
          "Exchanges are subject to size availability.",
          "Clearance/Sale items cannot be exchanged.",
        ],
      },
      { type: "heading", text: "How to Exchange" },
      {
        type: "paragraph",
        text: "Visit our Exchange Portal and enter your order number and email. Follow the instructions to select the item you want to exchange.",
      },
    ],
  },
  "policies": {
    title: "All Policies",
    breadcrumb: "Policies",
    sections: [
      {
        type: "paragraph",
        text: "Below you will find links to all our store policies.",
      },
      {
        type: "list",
        items: [
          "Return Policy",
          "Refund Policy",
          "Shipping Policy",
          "Terms of Service",
          "Privacy Policy",
          "Exchange Policy",
        ],
      },
    ],
  },
  "partner": {
    title: "Partner With Us",
    breadcrumb: "Partner With Us",
    sections: [
      {
        type: "paragraph",
        text: "Are you a creator, influencer, or retailer? We'd love to partner with you!",
        bold: true,
      },
      { type: "heading", text: "Creators & Influencers" },
      {
        type: "paragraph",
        text: "Join the Vultures family and get access to exclusive drops, PR packages, and affiliate commissions. Send us your portfolio and social links to collaborate.",
      },
      { type: "heading", text: "Wholesale & Retail" },
      {
        type: "paragraph",
        text: "Interested in stocking Vultures in your store? We offer competitive wholesale pricing for select boutique partners.",
      },
      { type: "heading", text: "Get in Touch" },
      {
        type: "html",
        html: 'Email us at <a href="mailto:partners@vultures.store" class="text-[#9a1818] hover:underline">partners@vultures.store</a>',
      },
    ],
  },
};


export const contentPages = {
  en: contentPagesEn,
  hi: contentPagesHi,
  fr: contentPagesFr,
  es: contentPagesEs
};
