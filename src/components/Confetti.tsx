import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
    id: number;
    x: number;
    color: string;
    size: number;
    rotation: number;
}

export default function Confetti({ active }: { active: boolean }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        if (!active) {
            setParticles([]);
            return;
        }
        const colors = ['#dc2626', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
        const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
        }));
        setParticles(newParticles);

        const timer = setTimeout(() => setParticles([]), 3000);
        return () => clearTimeout(timer);
    }, [active]);

    return (
        <AnimatePresence>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        opacity: 1,
                        y: -20,
                        x: `${p.x}vw`,
                        rotate: 0,
                        scale: 1
                    }}
                    animate={{
                        opacity: 0,
                        y: '100vh',
                        rotate: p.rotation * 3,
                        scale: 0
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        ease: "easeOut",
                        delay: Math.random() * 0.5
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                        zIndex: 100,
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </AnimatePresence>
    );
}
