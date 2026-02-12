import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'client', 'src'),
        },
    },
    root: path.join(__dirname, 'client'),
    publicDir: path.join(__dirname, 'client', 'public'),
    build: {
        outDir: path.join(__dirname, 'dist', 'public'),
        emptyOutDir: true,
    },
    server: {
        port: 5173,
    },
    preview: {
        port: 5173,
    },
});
