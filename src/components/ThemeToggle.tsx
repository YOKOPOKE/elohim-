import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { dark, toggle } = useTheme();

    return (
        <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed top-24 right-6 z-30 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
            <motion.div
                initial={false}
                animate={{ rotate: dark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {dark ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                )}
            </motion.div>
        </motion.button>
    );
}
