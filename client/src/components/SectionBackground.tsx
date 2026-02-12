import { motion } from 'framer-motion';

// Floating particles
const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
}));

export function SectionBackground() {
    return (
        <>
            {/* Light Mode Ambient Gradient - Creative Touch */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-indigo-50/50 to-purple-50 opacity-100 dark:opacity-0 transition-opacity duration-500 pointer-events-none" />

            {/* Light Mode Specific Orbs (Hidden in Dark Mode) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl mix-blend-multiply"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl mix-blend-multiply"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300">
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

            {/* Enhanced gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none transition-colors duration-300">
                <motion.div
                    className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-300">
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
        </>
    );
}
