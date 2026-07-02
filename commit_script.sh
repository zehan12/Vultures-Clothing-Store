#!/bin/bash
set -e

git add package.json bun.lockb next.config.ts components.json src/lib/ || true
git commit -m "chore: setup shadcn and base configuration" || true

git add src/app/globals.css src/app/layout.tsx || true
git commit -m "style: add global styles and root layout" || true

git add src/data/ || true
git commit -m "feat: setup static catalog data" || true

git add src/components/ui/ || true
git commit -m "feat: add base UI components" || true

git add src/components/shared/ || true
git commit -m "feat: add shared UI components" || true

git add src/components/layout/ || true
git commit -m "feat: add layout components (Header, Footer, Search)" || true

git add src/components/store/ || true
git commit -m "feat: add store frontend components (Hero, Product Cards)" || true

git add src/app/page.tsx || true
git commit -m "feat: implement home page" || true

git add src/app/category/ || true
git commit -m "feat: implement category pages" || true

git add src/app/product/ || true
git commit -m "feat: implement product details page" || true

git add src/app/cart/ || true
git commit -m "feat: implement cart page" || true

git add src/components/content/ || true
git commit -m "feat: add static content page wrapper" || true

git add src/app/privacy-policy/ src/app/return-policy/ src/app/terms-of-service/ src/app/refund-policy/ src/app/shipping-policy/ || true
git commit -m "feat: implement legal policy pages" || true

git add src/app/about-us/ src/app/contact-us/ || true
git commit -m "feat: implement about and contact pages" || true

git add src/app/track-order/ src/app/account/ || true
git commit -m "feat: implement order tracking and account login" || true

git add src/app/favicon.ico || true
git commit -m "chore: add favicon" || true

# Catch anything remaining
git add .
git commit -m "chore: catch all remaining uncommitted changes" || true

