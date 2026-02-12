import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import {
    SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiPostgresql, SiGit,
    SiJavascript, SiPython, SiDocker, SiFigma, SiVercel, SiVite
} from 'react-icons/si';
import { Button } from './ui/button';

// Inner orbit - faster, smaller icons
const innerOrbitIcons = [
    { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { Icon: SiPython, color: '#3776AB', name: 'Python' },
    { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
    { Icon: SiFigma, color: '#F24E1E', name: 'Figma' },
];

// Main orbit - medium speed
const mainOrbitIcons = [
    { Icon: SiReact, color: '#61DAFB', name: 'React' },
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
    { Icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
    { Icon: SiGit, color: '#F05032', name: 'Git' },
];

// Outer orbit - slower, larger icons
const outerOrbitIcons = [
    { Icon: SiVercel, color: '#000000', name: 'Vercel' },
    { Icon: SiVite, color: '#646CFF', name: 'Vite' },
];

// Floating particles - reduced count for performance
const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
}));

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 transition-colors duration-300 ease-in-out">
            {/* Gradient Overlay for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}>
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            backgroundPosition: ['0px 0px', '50px 50px'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px),
                               linear-gradient(to bottom, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                        }}
                    />
                </div>
            </div>

            {/* Enhanced gradient orbs - Repositioned for mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-20 md:-left-48 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 md:-right-48 w-64 md:w-96 h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-500/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-primary/30"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Inner Orbit - Fast rotating icons */}
            <div className="absolute inset-0 pointer-events-none">
                {innerOrbitIcons.map(({ Icon, color, name }, index) => {
                    const angle = (index * 360) / innerOrbitIcons.length;
                    const radius = 180;

                    return (
                        <motion.div
                            key={name}
                            className="absolute top-1/2 left-1/2"
                            style={{ x: -16, y: -16 }}
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <motion.div
                                style={{
                                    x: Math.cos((angle * Math.PI) / 180) * radius,
                                    y: Math.sin((angle * Math.PI) / 180) * radius,
                                }}
                                className="relative group"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-full blur-xl opacity-40" style={{
                                    background: `radial-gradient(circle, ${color}40, transparent)`,
                                    width: '48px',
                                    height: '48px',
                                    margin: '-8px',
                                }} />

                                {/* Icon */}
                                <motion.div
                                    className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border shadow-lg"
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, -360],
                                    }}
                                    transition={{
                                        y: { duration: 2.5, repeat: Infinity },
                                        rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                                    }}
                                >
                                    <Icon style={{ color }} className="w-4 h-4" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Orbit - Medium speed */}
            <div className="absolute inset-0 pointer-events-none">
                {mainOrbitIcons.map(({ Icon, color, name }, index) => {
                    const angle = (index * 360) / mainOrbitIcons.length;
                    const radius = 300;

                    return (
                        <motion.div
                            key={name}
                            className="absolute top-1/2 left-1/2"
                            style={{ x: -20, y: -20 }}
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <motion.div
                                style={{
                                    x: Math.cos((angle * Math.PI) / 180) * radius,
                                    y: Math.sin((angle * Math.PI) / 180) * radius,
                                }}
                                className="relative"
                            >
                                {/* Dotted orbit path */}
                                <svg className="absolute -inset-6 w-20 h-20" viewBox="0 0 80 80">
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="36"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeDasharray="3,6"
                                        className="text-primary/20"
                                    />
                                </svg>

                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-full blur-xl opacity-50" style={{
                                    background: `radial-gradient(circle, ${color}60, transparent)`,
                                    width: '56px',
                                    height: '56px',
                                    margin: '-8px',
                                }} />

                                {/* Icon */}
                                <motion.div
                                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-background/90 backdrop-blur-sm border-2 shadow-xl"
                                    style={{ borderColor: color + '40' }}
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [0, -360],
                                        boxShadow: [
                                            `0 0 20px ${color}40`,
                                            `0 0 30px ${color}60`,
                                            `0 0 20px ${color}40`,
                                        ],
                                    }}
                                    transition={{
                                        y: { duration: 3, repeat: Infinity },
                                        rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                                        boxShadow: { duration: 2, repeat: Infinity },
                                    }}
                                >
                                    <Icon style={{ color }} className="w-5 h-5" />
                                </motion.div>

                                {/* Connecting line */}
                                <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{
                                    width: radius * 2,
                                    height: radius * 2,
                                    marginLeft: -radius,
                                    marginTop: -radius,
                                }}>
                                    <line
                                        x1={radius}
                                        y1={radius}
                                        x2={radius + Math.cos((angle * Math.PI) / 180) * radius}
                                        y2={radius + Math.sin((angle * Math.PI) / 180) * radius}
                                        stroke={color}
                                        strokeWidth="1"
                                        strokeDasharray="4,8"
                                        opacity="0.15"
                                    />
                                </svg>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Outer Orbit - Slow rotating large icons */}
            <div className="absolute inset-0 pointer-events-none">
                {outerOrbitIcons.map(({ Icon, color, name }, index) => {
                    const angle = (index * 360) / outerOrbitIcons.length + 45; // Offset by 45 degrees
                    const radius = 420;

                    return (
                        <motion.div
                            key={name}
                            className="absolute top-1/2 left-1/2"
                            style={{ x: -24, y: -24 }}
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <motion.div
                                style={{
                                    x: Math.cos((angle * Math.PI) / 180) * radius,
                                    y: Math.sin((angle * Math.PI) / 180) * radius,
                                }}
                                className="relative"
                            >
                                {/* Large glow */}
                                <div className="absolute inset-0 rounded-full blur-2xl opacity-30" style={{
                                    background: `radial-gradient(circle, ${color}80, transparent)`,
                                    width: '72px',
                                    height: '72px',
                                    margin: '-12px',
                                }} />

                                {/* Icon */}
                                <motion.div
                                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-background/95 backdrop-blur-md border-2 shadow-2xl"
                                    style={{ borderColor: color + '50' }}
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, -360],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        y: { duration: 4, repeat: Infinity },
                                        rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
                                        scale: { duration: 3, repeat: Infinity },
                                    }}
                                >
                                    <Icon style={{ color: name === 'Vercel' ? 'currentColor' : color }} className="w-6 h-6" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hi, I'm
                        </motion.p>
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                        >
                            <span className="gradient-text">Arab Abderrahim</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Full-stack web developer crafting exceptional digital experiences
                            with modern technologies and creative design.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" onClick={() => scrollToSection('projects')}>
                                View My Work
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {[
                            { Icon: Github, label: 'GitHub' },
                            { Icon: Linkedin, label: 'LinkedIn' },
                            { Icon: Mail, label: 'Email' },
                        ].map(({ Icon, label }, index) => (
                            <motion.div
                                key={label}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: (i) => ({
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.7 + i * 0.1,
                                            duration: 0.5,
                                        },
                                    }),
                                    hover: {
                                        scale: 1.1,
                                        y: -5,
                                        transition: { duration: 0.2 },
                                    },
                                    tap: {
                                        scale: 0.95,
                                        transition: { duration: 0.1 },
                                    },
                                }}
                            >
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Icon className="h-5 w-5" />
                                    <span className="sr-only">{label}</span>
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    y: { duration: 2, repeat: Infinity },
                    default: { duration: 0.2 }
                }}
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.2 }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
                    <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </div>
            </motion.div>
            {/* Bottom blend gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20 transition-colors duration-300" />
        </section>
    );
}
