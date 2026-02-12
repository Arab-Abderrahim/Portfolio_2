import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

const DATABASE_URL = process.env.DATABASE_URL || './portfolio_v4.db';

const sqlite = new Database(DATABASE_URL);
export const db = drizzle(sqlite, { schema });

// Create tables if they don't exist
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at INTEGER
  );

  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    image TEXT NOT NULL,
    tags TEXT NOT NULL,
    demo_url TEXT,
    github_url TEXT,
    featured INTEGER DEFAULT 0,
    created_at INTEGER
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    company TEXT,
    content TEXT NOT NULL,
    avatar TEXT,
    rating INTEGER DEFAULT 5,
    created_at INTEGER
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    read INTEGER DEFAULT 0,
    created_at INTEGER
  );
`);

// Initialize database with sample data
export async function initializeDatabase() {
  const { projects } = schema;

  // Check if we already have data
  const existingProjects = db.select().from(projects).all();
  if (existingProjects.length > 0) {
    console.log('Database already initialized');
    return;
  }

  // Insert sample projects
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

  console.log('Database initialized with project data');
}
