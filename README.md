# E-commerce Product Page

A responsive e-commerce product page built with React, TypeScript, and Tailwind CSS, based on the [Frontend Mentor E-commerce Product Page challenge](https://www.frontendmentor.io/).

## Live Demo

- **GitHub:** https://github.com/jzzmiiinn/E-commerce-product-page
- **Live Demo:** Add your deployed website URL here.

## Features

- Responsive mobile and desktop layout
- Interactive product gallery with thumbnails
- Image lightbox with navigation controls
- Shopping cart with quantity and price calculations
- Add and remove cart items
- Shared state management using Context API and `useReducer`
- Checkout page with order summary
- Simulated order confirmation
- Client-side routing with React Router
- Custom 404 page

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API and `useReducer`
- pnpm

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/jzzmiiinn/E-commerce-product-page.git
```

Navigate to the project folder:

```bash
cd E-commerce-product-page
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the local URL shown in your terminal.

## Project Structure

```text
src/
├── components/
│   ├── cart/
│   │   ├── CartDropdown.tsx
│   │   └── CartItem.tsx
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   └── Navbar.tsx
│   └── product/
│       ├── Lightbox.tsx
│       ├── ProductGallery.tsx
│       ├── ProductInfo.tsx
│       └── QuantitySelector.tsx
├── context/
│   └── CartContext.tsx
├── pages/
│   ├── CartPage.tsx
│   └── NotFoundPage.tsx
├── reducers/
│   └── cartReducer.ts
├── types/
│   ├── cart.ts
│   └── product.ts
├── App.tsx
├── index.css
└── main.tsx
```

## What I Learned

- Building reusable components with React and TypeScript
- Managing shared state with Context API and `useReducer`
- Implementing client-side routing
- Creating interactive galleries and shopping cart functionality
- Building responsive interfaces with Tailwind CSS

## Acknowledgements

Design inspiration and assets from [Frontend Mentor](https://www.frontendmentor.io/).

## Note

Checkout is a frontend demonstration only. No real payments are processed.
