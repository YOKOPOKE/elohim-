import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="inicio" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
            {/* Parallax background with Ken Burns effect */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <motion.img
                    src="https://picsum.photos/seed/campvid/1920/1080"
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.15 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                />
                <div className="absolute inset-0 bg-dark/70" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48 w-full"
            >
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-primary/30">
                            Plan V Elohim — Chiapas, México
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white"
                    >
                        Descubre tu
                        <br />
                        <span className="text-primary">propósito</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
                    >
                        Únete a nuestros campamentos y retiros espirituales. Un espacio diseñado para reconectar, crecer y encontrar tu propósito en Dios.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#campamentos"
                            className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2 group"
                        >
                            Ver Campamentos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#nosotros"
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            ▶ Conoce Más
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-3 bg-white/60 rounded-full" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
