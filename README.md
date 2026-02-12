# Creative Web Developer Portfolio

A modern, full-stack portfolio website built with React, TypeScript, Express, and SQLite.

## Features

- 🎨 Modern, award-winning design with dark/light theme
- ⚡ Fast and responsive with Vite
- 🎭 Smooth animations with Framer Motion
- 💾 SQLite database with Drizzle ORM
- 🔧 Full-stack TypeScript
- 📱 Mobile-first responsive design
- 🎯 SEO optimized

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- TanStack Query
- shadcn/ui components

### Backend
- Node.js
- Express
- Drizzle ORM
- better-sqlite3

### Build Tools
- Vite
- PostCSS
- Autoprefixer

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
copy .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Run backend server standalone
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
Portfolio/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── lib/         # Utilities and providers
│   │   └── index.css    # Global styles
│   └── index.html
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   └── routes.ts        # API routes
├── db/                  # Database layer
│   ├── schema.ts        # Database schema
│   └── index.ts         # Database connection
└── package.json
```

## License

MIT
