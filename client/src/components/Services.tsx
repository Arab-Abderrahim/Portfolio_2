import { motion } from 'framer-motion';
import { Code, Laptop, Palette, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom web applications built with modern frameworks and best practices.',
        features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
    },
    {
        icon: Laptop,
        title: 'Full-Stack Solutions',
        description: 'End-to-end development from database to frontend with seamless integration.',
        features: ['System Architecture', 'Authentication', 'Real-time Features', 'Cloud Deployment'],
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
        features: ['Responsive Design', 'Design Systems', 'Prototyping', 'User Testing'],
    },
    {
        icon: Smartphone,
        title: 'Responsive Apps',
        description: 'Mobile-first applications that work perfectly on any device or screen size.',
        features: ['Mobile Optimization', 'PWA Development', 'Cross-browser', 'Performance'],
    },
];

import { SectionBackground } from './SectionBackground';

// ... (keep existing imports)

export function Services() {
    return (
        <section id="services" className="section-padding relative overflow-hidden">
            <SectionBackground />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Services
                    </h2>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Comprehensive web development services to bring your ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
