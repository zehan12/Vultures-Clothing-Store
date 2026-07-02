# Vultures Clothing Store

A modern, high-performance e-commerce storefront for a premium streetwear and clothing brand. Built with the Next.js App Router, Tailwind CSS, and shadcn/ui, this application delivers a sleek dark-themed UI, responsive design, and smooth user interactions.

## 🚀 Features

- **Dynamic Product Catalog**: Browse products by categories (Baggy Pants, Oversized Hoodies, T-shirts, etc.)
- **Product Details**: Immersive product pages with detailed views, image galleries, and pricing.
- **Cart & Wishlist**: Add products to your shopping cart or save them for later in your wishlist.
- **User Dashboard**: Dedicated profile section for managing account settings and viewing previous orders.
- **Order Tracking**: Seamless interface for customers to check the status of their orders.
- **Search System**: Global modal search to find specific items instantly.
- **Help & Support**: Quick access to contact information, notifications, and all store policies (Returns, Shipping, Terms of Service, Privacy).
- **Fully Responsive**: Optimized for seamless shopping experiences across mobile, tablet, and desktop devices.
- **Dark Mode UI**: A premium, consistent dark-themed aesthetic perfectly aligned with modern streetwear culture.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Linter & Formatter**: [Biome](https://biomejs.dev/)

## 📦 Getting Started

First, make sure you have [Bun](https://bun.sh/) installed on your system.

1. **Clone the repository:**
   ```bash
   git clone git@github.com:zehan12/Vultures-Clothing-Store.git
   cd Vultures-Clothing-Store
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Run the development server:**
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── category/       # Dynamic category filtering
│   │   ├── product/        # Dynamic product pages
│   │   ├── cart/           # Shopping cart
│   │   ├── wishlist/       # User wishlist
│   │   ├── account/        # User authentication and profile
│   │   └── ...             # Policy and static pages
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Header, Footer, Search
│   │   ├── shared/         # Breadcrumbs, Section Headings
│   │   ├── store/          # E-commerce specific components
│   │   └── ui/             # Base UI elements
│   ├── data/               # Static product catalog data
│   └── lib/                # Utility functions and helpers
├── public/                 # Static assets and icons
└── ...
```

## 📜 License

This project is licensed under the MIT License.
