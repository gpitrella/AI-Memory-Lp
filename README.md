# AI Memory Landing

This is the official landing page for [AI Memory](https://aimemory.dev) - a persistent memory system for AI applications.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

This project is configured to deploy automatically to Vercel via GitHub Actions.

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Environment Variables

Not required for local development.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Project Structure

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── pricing/page.tsx     # Pricing page
│   ├── docs/
│   │   ├── getting-started/ # Documentation
│   │   └── api/             # API reference
│   └── layout.tsx
├── components/
├── public/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## License

MIT
