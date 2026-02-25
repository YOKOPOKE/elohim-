import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { EVENTS } from '../data/events';

export default function Countdown() {
    const nextEvent = EVENTS.reduce((closest, event) => {
        const now = new Date();
        if (event.date > now && (!closest || event.date < closest.date)) return event;
        return closest;
    }, EVENTS[0]);

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const diff = nextEvent.date.getTime() - now.getTime();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    const blocks = [
        { value: timeLeft.days, label: 'Días' },
        { value: timeLeft.hours, label: 'Horas' },
        { value: timeLeft.minutes, label: 'Min' },
        { value: timeLeft.seconds, label: 'Seg' },
    ];

    return (
        <section className="py-16 bg-dark text-white px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-primary font-bold text-sm uppercase tracking-widest">Próximo evento</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{nextEvent.title}</h3>
                    <p className="text-gray-400 mb-10">{nextEvent.location}</p>
                </motion.div>

                <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl mx-auto">
                    {blocks.map((block, i) => (
                        <motion.div
                            key={block.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6"
                        >
                            <div className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
                                {String(block.value).padStart(2, '0')}
                            </div>
                            <div className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider font-medium">
                                {block.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
