import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

const DATABASE_URL = process.env.DATABASE_URL || './portfolio_v3.db';

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
      title: 'Medical Application',
      description: 'A comprehensive medical application for managing patient records and appointments',
      longDescription: 'A secure and efficient system for doctors and patients to manage health records, appointments, and prescriptions. Built with compliance and usability in mind.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070',
      tags: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'HealthKit']),
      featured: true,
    },
    {
      title: 'Travello',
      description: 'A frontend booking website inspired by Booking.com',
      longDescription: 'A modern travel booking interface featuring search, property listings, and reservation management. Focuses on user experience and responsive design.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074',
      tags: JSON.stringify(['React', 'TypeScript', 'Tailwind CSS', 'Vite']),
      featured: true,
    },
    {
      title: 'Tafaceel',
      description: 'Modern E-commerce Platform',
      longDescription: 'A premium shopping experience with advanced filtering, cart management, and secure checkout. Built for scalability and performance.',
      image: 'https://images.unsplash.com/photo-1472851294608-41551b116d4e?auto=format&fit=crop&q=80&w=2070',
      tags: JSON.stringify(['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL']),
      featured: true,
    },
  ]).run();

  console.log('Database initialized with new project data');

  console.log('Database initialized with sample data');
}
