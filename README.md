# Dahla Group - Logistics & Freight Forwarding Website

A modern web application for Dahla Group's logistics and freight forwarding services.

## Project Overview

This project is a comprehensive website showcasing Dahla Group's logistics services including air freight, sea freight, land transport, charter flights, and customs clearance services.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Helmet** - Document head management
- **Leaflet** - Interactive maps

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd dahlaweb-main

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The development server will start on `http://localhost:8080` (or the port specified in `vite.config.ts`).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── home/         # Home page specific components
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── ui/           # UI component library
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── styles/           # Global styles
```

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI/UX** - Clean, professional design following latest trends
- **Quote Request Forms** - Easy-to-use forms for requesting logistics quotes
- **Service Showcase** - Detailed service pages with modern card layouts
- **Interactive Maps** - Location maps using Leaflet
- **SEO Optimized** - Meta tags and structured content

## Deployment

The project can be deployed to any static hosting service:

- **Netlify** - Recommended for easy deployment
- **Vercel** - Great for React applications
- **GitHub Pages** - Free hosting option
- **Any static hosting** - Build the project and upload the `dist` folder

To build for production:

```sh
npm run build
```

The production files will be in the `dist` directory.

## License

Private project - All rights reserved.
