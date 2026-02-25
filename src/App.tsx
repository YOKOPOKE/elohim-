import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CampEvent } from './types';
import { ThemeProvider } from './context/ThemeContext';

import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import UpcomingEvents from './components/UpcomingEvents';
import Stats from './components/Stats';
import Values from './components/Values';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import CalendarModal from './components/CalendarModal';
import CampInfoModal from './components/CampInfoModal';
import RegistrationModal from './components/RegistrationModal';
import JoinModal from './components/JoinModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCamp, setSelectedCamp] = useState<CampEvent | null>(null);
  const [infoCamp, setInfoCamp] = useState<CampEvent | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showJoin, setShowJoin] = useState(false);

  useEffect(() => {
    if (showSplash || selectedCamp || showCalendar || showJoin || infoCamp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash, selectedCamp, showCalendar, showJoin, infoCamp]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-primary selection:text-white transition-colors duration-300">
        <AnimatePresence>
          {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>

        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar onJoin={() => setShowJoin(true)} />
            <ThemeToggle />
            <main>
              <Hero />
              <Countdown />
              <UpcomingEvents
                onRegister={(camp) => setSelectedCamp(camp)}
                onOpenCalendar={() => setShowCalendar(true)}
                onInfo={(camp) => setInfoCamp(camp)}
              />
              <Stats />
              <Values />
              <Gallery />
              <Testimonials />
              <FAQ />
              <AboutUs />
              <MapSection />
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
          </motion.div>
        )}

        <AnimatePresence>
          {showCalendar && (
            <CalendarModal
              onClose={() => setShowCalendar(false)}
              onRegister={(camp) => {
                setShowCalendar(false);
                setSelectedCamp(camp);
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {infoCamp && (
            <CampInfoModal
              camp={infoCamp}
              onClose={() => setInfoCamp(null)}
              onRegister={(camp) => {
                setInfoCamp(null);
                setSelectedCamp(camp);
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCamp && (
            <RegistrationModal
              camp={selectedCamp}
              onClose={() => setSelectedCamp(null)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showJoin && (
            <JoinModal onClose={() => setShowJoin(false)} />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
