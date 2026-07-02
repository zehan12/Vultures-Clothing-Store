#!/bin/bash
set -e

git add src/data/catalog.json || true
git commit -m "feat: add missing links to catalog data" || true

git add src/components/layout/header.tsx || true
git commit -m "feat: add wishlist and notifications icons to header" || true

git add src/app/wishlist/ || true
git commit -m "feat: implement wishlist page" || true

git add src/app/notifications/ || true
git commit -m "feat: implement notifications page" || true

git add src/app/help-support/ || true
git commit -m "feat: implement help and support page" || true

git add src/app/account/profile/ || true
git commit -m "feat: implement user profile section" || true

