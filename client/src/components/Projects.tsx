import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

async function fetchProjects(): Promise<Project[]> {
    const response = await fetch('/api/projects');
    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
}

import { SectionBackground } from './SectionBackground';

// ... (keep existing imports)

export function Projects() {
    const { data: projects, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    });

    if (error) {
        return (
            <section id="projects" className="section-padding relative overflow-hidden">
                <div className="container-custom">
                    <p className="text-center text-muted-foreground">Loading projects from database...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <SectionBackground />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        A selection of my recent work showcasing various technologies and design approaches
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-96 rounded-lg bg-muted animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects?.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-6xl opacity-20">💻</div>
                                        </div>
                                        {project.featured && (
                                            <Badge className="absolute top-4 right-4">Featured</Badge>
                                        )}
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-1">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 4).map((tag) => (
                                                <Badge key={tag} variant="outline">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
