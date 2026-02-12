import { Router } from 'express';
import { db } from '../db';
import { projects, testimonials, messages, insertMessageSchema } from '../db/schema';
import { eq } from 'drizzle-orm';
import nodemailer from 'nodemailer';

// Configure Nodemailer for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export function registerRoutes() {
    const router = Router();

    // GET /api/projects - Fetch all projects
    router.get('/projects', async (_req, res) => {
        try {
            const allProjects = db.select().from(projects).orderBy(projects.createdAt).all();

            // Parse tags from JSON string
            const projectsWithParsedTags = allProjects.map(p => ({
                ...p,
                tags: JSON.parse(p.tags),
            }));

            res.json(projectsWithParsedTags);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch projects' });
        }
    });

    // GET /api/projects/:id - Fetch single project
    router.get('/projects/:id', async (req, res) => {
        try {
            const { id } = req.params;

            // Basic validation
            if (!id || typeof id !== 'string') {
                return res.status(400).json({ error: 'Invalid project ID' });
            }

            const project = db.select().from(projects).where(eq(projects.id, id)).get();

            if (!project) {
                return res.status(404).json({ error: 'Project not found' });
            }

            res.json({
                ...project,
                tags: JSON.parse(project.tags),
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch project' });
        }
    });

    // GET /api/testimonials - Fetch all testimonials
    router.get('/testimonials', async (_req, res) => {
        try {
            const allTestimonials = db.select().from(testimonials).orderBy(testimonials.createdAt).all();
            res.json(allTestimonials);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch testimonials' });
        }
    });

    // GET /api/messages - Fetch all messages
    router.get('/messages', async (_req, res) => {
        try {
            const allMessages = db.select().from(messages).orderBy(messages.createdAt).all();
            res.json(allMessages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch messages' });
        }
    });

    // POST /api/messages - Submit contact form
    router.post('/messages', async (req, res) => {
        try {
            const validatedData = insertMessageSchema.parse(req.body);

            const newMessage = db.insert(messages).values(validatedData).returning().get();

            // Send email notification
            try {
                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: 'rahimwrk@gmail.com',
                    subject: `New Portfolio Message: ${validatedData.subject || 'No Subject'}`,
                    text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
                    `,
                    html: `
<h3>New Message from Portfolio</h3>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Subject:</strong> ${validatedData.subject}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
                    `,
                });
                console.log('Email notification sent successfully');
            } catch (emailError) {
                console.error('Failed to send email notification:', emailError);
                // Don't fail the request if email fails, just log it
            }

            res.status(201).json({
                success: true,
                message: 'Message sent successfully',
                data: newMessage
            });
        } catch (error: any) {
            if (error.name === 'ZodError') {
                return res.status(400).json({ error: 'Invalid input', details: error.errors });
            }
            res.status(500).json({ error: 'Failed to send message' });
        }
    });

    return router;
}
