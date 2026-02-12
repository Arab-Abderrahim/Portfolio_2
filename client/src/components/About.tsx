import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiPhp, SiPostgresql, SiNextdotjs, SiTypescript, SiNodedotjs, SiGit, SiFigma } from 'react-icons/si';
import { Badge } from './ui/badge';

const skillsWithIcons = [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
    { name: 'SQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
];

import { SectionBackground } from './SectionBackground';

// ... (keep existing imports)

export function About() {
    const stats = [
        { label: 'Years Experience', value: '2' },
        { label: 'Projects Completed', value: '5+' },
        { label: 'Clients', value: '10+' },
        { label: 'Code Commits', value: '500+' },
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden transition-colors duration-300">
            <SectionBackground />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        About Me
                    </h2>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Passionate developer with a keen eye for design and user experience
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Code2 className="w-32 h-32 text-primary" />
                            </motion.div>

                            {/* Decorative dots */}
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-primary/30"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 0.5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl font-bold">
                            Crafting Digital Experiences
                        </h3>
                        <p className="text-muted-foreground">
                            I'm a full-stack developer with over 2 years of experience building
                            modern web applications. I specialize in creating responsive,
                            user-friendly interfaces and scalable backend systems.
                        </p>
                        <p className="text-muted-foreground">
                            My approach combines clean code, modern design principles, and
                            performance optimization to deliver exceptional digital products
                            that users love.
                        </p>

                        <div className="flex gap-8 pt-4">
                            {[
                                { Icon: Palette, label: 'Creative Design' },
                                { Icon: Rocket, label: 'Fast Delivery' },
                                { Icon: Zap, label: 'Optimized' },
                            ].map(({ Icon, label }) => (
                                <motion.div
                                    key={label}
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                >
                                    <Icon className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {skillsWithIcons.map(({ name, Icon, color }, index) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <Badge variant="secondary" className="text-sm px-4 py-2 flex items-center gap-2 cursor-pointer">
                                    <Icon style={{ color }} className="w-4 h-4" />
                                    {name}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
