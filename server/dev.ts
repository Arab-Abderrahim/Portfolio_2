import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { initializeDatabase } from '../db/index.js';
import { registerRoutes } from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
    const app = express();

    // Initialize database
    await initializeDatabase();

    // Create Vite server in middleware mode
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        root: resolve(__dirname, '../client'),
        resolve: {
            alias: {
                '@': resolve(__dirname, '../client/src'),
            },
        },
    });

    // Body parsing middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // API routes
    // API routes
    app.use('/api', registerRoutes());

    // Use vite's middleware (should be after API routes)
    app.use(vite.middlewares);

    const port = 5173;
    app.listen(port, () => {
        console.log(`\n🚀 Server running at http://localhost:${port}`);
        console.log(`📦 API ready - Projects and Testimonials will load!\n`);
    });
}

createServer().catch(console.error);
