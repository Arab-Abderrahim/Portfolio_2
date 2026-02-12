import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Define schema directly here
const projects = sqliteTable('projects', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    description: text('description').notNull(),
    longDescription: text('long_description'),
    image: text('image'),
    tags: text('tags').notNull(),
    demoUrl: text('demo_url'),
    githubUrl: text('github_url'),
    featured: integer('featured', { mode: 'boolean' }).default(false),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

const testimonials = sqliteTable('testimonials', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    role: text('role').notNull(),
    company: text('company'),
    content: text('content').notNull(),
    avatar: text('avatar'),
    rating: integer('rating').notNull().default(5),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

const messages = sqliteTable('messages', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull(),
    subject: text('subject'),
    message: text('message').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// Initialize database
const DATABASE_URL = './portfolio.db';
const sqlite = new Database(DATABASE_URL);
const db = drizzle(sqlite, { schema: { projects, testimonials, messages } });

// Initialize with sample data
const existingProjects = db.select().from(projects).all();
if (existingProjects.length === 0) {
    console.log('🔄 Initializing database with sample data...');

    db.insert(projects).values([
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with real-time inventory management',
            longDescription: 'Built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard.',
            image: '/images/projects/ecommerce.jpg',
            tags: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'Stripe']),
            githubUrl: 'https://github.com/Arab-Abderrahim/Tafaceel',
            featured: true,
        },
        {
            title: 'OBLIVION',
            description: 'Educational Network Scanner',
            longDescription: 'OBLIVION is an educational, multi-threaded TCP network scanner written in C. It demonstrates core cybersecurity concepts such as socket programming, multithreading, concurrency control, banner grabbing, CIDR scanning, and structured data export.',
            image: '/images/projects/taskapp.jpg',
            tags: JSON.stringify(['C', 'JSON']),
            githubUrl: 'https://github.com/Arab-Abderrahim/OBLIVION',
            featured: true,
        },
    ]).run();

    db.insert(testimonials).values([
        {
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechStart Inc',
            content: 'Outstanding work! The portfolio website exceeded all our expectations. The attention to detail and modern design really set our brand apart.',
            avatar: '/images/testimonials/sarah.jpg',
            rating: 5,
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager',
            company: 'Digital Solutions',
            content: 'Professional, responsive, and creative. Delivered the project on time and was always available for revisions. Highly recommend!',
            avatar: '/images/testimonials/michael.jpg',
            rating: 5,
        },
        {
            name: 'Emily Rodriguez',
            role: 'Marketing Director',
            company: 'GrowthLab',
            content: 'The e-commerce platform transformed our business. Sales increased by 300% in the first quarter. Amazing developer to work with!',
            avatar: '/images/testimonials/emily.jpg',
            rating: 5,
        },
    ]).run();

    console.log('✅ Database initialized successfully!');
} else {
    console.log('✅ Database already initialized');
}

async function createServer() {
    const app = express();

    // Create Vite server in middleware mode
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        root: resolve(__dirname, '../client'),
    });

    // Body parsing middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // API routes
    app.get('/api/projects', (req, res) => {
        try {
            const allProjects = db.select().from(projects).all();
            const parsed = allProjects.map(p => ({
                ...p,
                tags: JSON.parse(p.tags),
            }));
            res.json(parsed);
        } catch (error) {
            console.error('Error fetching projects:', error);
            res.status(500).json({ error: 'Failed to fetch projects' });
        }
    });

    app.get('/api/testimonials', (req, res) => {
        try {
            const allTestimonials = db.select().from(testimonials).all();
            res.json(allTestimonials);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            res.status(500).json({ error: 'Failed to fetch testimonials' });
        }
    });

    app.post('/api/messages', (req, res) => {
        try {
            const message = db.insert(messages).values(req.body).run();
            res.json({ success: true, id: message.lastInsertRowid });
        } catch (error) {
            console.error('Error saving message:', error);
            res.status(500).json({ error: 'Failed to save message' });
        }
    });

    // Use vite's middleware (should be after API routes)
    app.use(vite.middlewares);

    const port = 5173;
    app.listen(port, () => {
        console.log(`\n🚀 Server running at http://localhost:${port}`);
        console.log(`📦 API ready - Projects and Testimonials will load!\n`);
    });
}

createServer().catch(console.error);
