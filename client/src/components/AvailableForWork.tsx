import { SectionBackground } from './SectionBackground';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function AvailableForWork() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="available" className="section-padding relative overflow-hidden">
            <SectionBackground />

            <div className="container-custom relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                        </motion.div>
                        <span className="text-sm font-medium text-primary">Available for Freelance Work</span>
                        <motion.div
                            className="w-2 h-2 rounded-full bg-green-500"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Let's Work Together!
                    </h2>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I'm currently available for freelance projects and full-time opportunities.
                        Let's create something amazing together.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button size="lg" onClick={scrollToContact} className="group">
                            Start a Project
                            <motion.div
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </Button>

                        <Button size="lg" variant="outline" asChild>
                            <a href="mailto:hello@example.com">
                                Email Me
                            </a>
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm text-muted-foreground">Response Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">100%</div>
                            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">4★</div>
                            <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
