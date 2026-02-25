import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Users, ArrowRight, X, CheckCircle2, ChevronRight, ChevronLeft, Clock, Info } from 'lucide-react';

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        {/* Logo Animation */}
        <div className="w-24 h-24 border-4 border-primary rounded-full flex items-center justify-center mb-8 relative">
          <motion.div 
            className="absolute inset-0 border-4 border-primary rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-4xl font-bold text-white tracking-tighter">PB</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
          PLAN <span className="text-primary">B</span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-gray-400 mb-12">
          Ministerio Heloim
        </p>

        {/* Loading Bar */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Navbar({ onJoin }: { onJoin: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tight">
          PLAN <span className="text-primary">B</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#inicio" className="hover:text-primary transition-colors">Home</a>
          <a href="#nosotros" className="hover:text-primary transition-colors">About</a>
          <a href="#campamentos" className="hover:text-primary transition-colors">Campgrounds</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onJoin}
          className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors duration-300"
        >
          Unirse
        </motion.button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Transforma tu <br />
            <span className="text-primary">propósito</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Únete a nuestros campamentos y retiros espirituales. Un espacio diseñado para reconectar, crecer y encontrar tu Plan B en Dios.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#campamentos" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2">
              Ver Campamentos <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 relative">
            <img 
              src="https://picsum.photos/seed/camp/800/1000" 
              alt="Campamento" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-white/20 backdrop-blur-md inline-block px-4 py-2 rounded-full text-sm font-medium mb-3">
                Próximo Evento
              </div>
              <h3 className="text-3xl font-bold">Campamento de Verano 2026</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const EVENTS = [
  {
    id: 1,
    date: new Date(2026, 7, 15), // 15 Agosto 2026
    endDate: new Date(2026, 7, 18),
    title: "Campamento Renacer",
    description: "Un tiempo de renovación espiritual y conexión con Dios en medio de la naturaleza. Disfruta de plenarias, fogatas, y dinámicas de equipo diseñadas para fortalecer tu fe.",
    location: "Comitán de Domínguez, Chiapas",
    time: "08:00 AM - 04:00 PM",
    spots: 120,
    available: 45,
    image: "https://picsum.photos/seed/camp1/600/400"
  },
  {
    id: 2,
    date: new Date(2026, 9, 10), // 10 Octubre 2026
    endDate: new Date(2026, 9, 12),
    title: "Retiro de Jóvenes: Fuego",
    description: "Tres días intensos de adoración, palabra y dinámicas para encender tu pasión por Cristo. Un espacio para jóvenes que buscan un encuentro real y transformador.",
    location: "Lagos de Montebello, Chiapas",
    time: "02:00 PM - 12:00 PM",
    spots: 80,
    available: 12,
    image: "https://picsum.photos/seed/camp2/600/400"
  },
  {
    id: 3,
    date: new Date(2027, 0, 5), // 5 Enero 2027
    endDate: new Date(2027, 0, 9),
    title: "Campamento Extremo",
    description: "Desafía tus límites físicos y espirituales en este campamento de inicio de año. Actividades al aire libre, competencias extremas y tiempos profundos de oración.",
    location: "Las Nubes, Chiapas",
    time: "06:00 AM - 05:00 PM",
    spots: 150,
    available: 150,
    image: "https://picsum.photos/seed/camp3/600/400"
  }
];

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function UpcomingEvents({ onRegister, onOpenCalendar, onInfo }: { onRegister: (camp: any) => void, onOpenCalendar: () => void, onInfo: (camp: any) => void }) {
  return (
    <section id="campamentos" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">Próximos Campamentos</h2>
            <p className="text-gray-600 max-w-2xl">Reserva tu lugar en nuestros próximos eventos. Los cupos son limitados.</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCalendar}
            className="bg-dark text-white px-6 py-3 rounded-full font-medium hover:bg-primary transition-colors flex items-center gap-2 shrink-0"
          >
            <CalendarIcon className="w-5 h-5" /> Ver fechas en calendario
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.slice(0, 3).map((camp, index) => (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={camp.image} 
                  alt={camp.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark">
                  {camp.available} cupos
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{camp.title}</h3>
                <div className="space-y-3 mb-8 text-gray-600 text-sm flex-grow">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-primary shrink-0" />
                    <span>{camp.date.getDate()} {monthNames[camp.date.getMonth()]} {camp.date.getFullYear()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span>{camp.location}</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onInfo(camp)}
                    className="flex-1 border border-gray-200 text-dark py-3 rounded-xl font-medium hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <Info className="w-4 h-4" /> Info
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onRegister(camp)}
                    className="flex-1 bg-dark text-white py-3 rounded-xl font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    Reservar <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarModal({ onClose, onRegister }: { onClose: () => void, onRegister: (camp: any) => void }) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1)); // Start at August 2026
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedEvent(null);
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedEvent(null);
  };

  const getEventsForDay = (day: number) => {
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return EVENTS.filter(e => {
      const start = new Date(e.date.getFullYear(), e.date.getMonth(), e.date.getDate());
      const end = new Date(e.endDate.getFullYear(), e.endDate.getMonth(), e.endDate.getDate());
      return dateToCheck >= start && dateToCheck <= end;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-gray-50 rounded-3xl w-full max-w-6xl overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]"
      >
        <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Calendario de <span className="text-primary">Eventos</span></h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Calendar Grid */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-dark text-white px-6 py-6 flex items-center justify-between">
                <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold capitalize">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
                  {dayNames.map(day => (
                    <div key={day} className="text-center text-sm font-bold text-gray-400 uppercase tracking-wider">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2 md:gap-4">
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square rounded-2xl bg-gray-50/50" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dayEvents = getEventsForDay(day);
                    const hasEvent = dayEvents.length > 0;
                    const isSelected = selectedEvent && dayEvents.some(e => e.id === selectedEvent.id);
                    
                    return (
                      <button
                        key={day}
                        onClick={() => hasEvent && setSelectedEvent(dayEvents[0])}
                        disabled={!hasEvent}
                        className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all duration-300 ${
                          isSelected
                            ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105 z-10'
                            : hasEvent 
                              ? 'bg-red-50 text-primary hover:bg-red-100 cursor-pointer border border-red-100' 
                              : 'bg-white text-gray-600 border border-gray-100 opacity-50 cursor-default'
                        }`}
                      >
                        <span className="text-lg md:text-xl font-semibold">{day}</span>
                        {hasEvent && !isSelected && (
                          <span className="w-1.5 h-1.5 bg-primary rounded-full absolute bottom-3" />
                        )}
                        {isSelected && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-3" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {selectedEvent ? (
                  <motion.div
                    key={selectedEvent.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <div className="h-48 relative">
                      <img 
                        src={selectedEvent.image} 
                        alt={selectedEvent.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 uppercase tracking-wider">
                          Evento Seleccionado
                        </div>
                        <h3 className="text-2xl font-bold leading-tight">{selectedEvent.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        {selectedEvent.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                            <CalendarIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">Fecha</p>
                            <p className="font-semibold text-dark text-sm">
                              {selectedEvent.date.getDate()} al {selectedEvent.endDate.getDate()} de {monthNames[selectedEvent.date.getMonth()]}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">Hora</p>
                            <p className="font-semibold text-dark text-sm">{selectedEvent.time}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">Lugar</p>
                            <p className="font-semibold text-dark text-sm">{selectedEvent.location}</p>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          onClose();
                          onRegister(selectedEvent);
                        }}
                        className="w-full bg-dark text-white py-4 rounded-xl font-medium hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        Reservar Lugar <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[400px] border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-center p-8 bg-white"
                  >
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
                      <CalendarIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ninguna fecha seleccionada</h3>
                    <p className="text-gray-500 max-w-xs text-sm">
                      Haz clic en los días resaltados en el calendario para ver los detalles del evento.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RegistrationModal({ camp, onClose }: { camp: any, onClose: () => void }) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl my-8"
      >
        <div className="relative h-32 bg-dark">
          <img src={camp.image} alt={camp.title} className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 text-white">
            <p className="text-sm font-medium text-primary mb-1">Registro</p>
            <h3 className="text-2xl font-bold">{camp.title}</h3>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nombre</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Apellido</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Pérez" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="juan@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Teléfono</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+504 0000-0000" />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300">
                  Confirmar Reserva
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-2">¡Reserva Exitosa!</h4>
              <p className="text-gray-600 mb-8">
                Hemos enviado los detalles de pago y confirmación a tu correo electrónico.
              </p>
              <button 
                onClick={onClose}
                className="bg-dark text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-bold text-3xl tracking-tight mb-6">
            PLAN <span className="text-primary">B</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Ministerio Heloim. Transformando vidas a través de experiencias espirituales y campamentos que marcan un antes y un después.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Enlaces</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#campamentos" className="hover:text-white transition-colors">Campamentos</a></li>
            <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Contacto</h4>
          <ul className="space-y-4 text-gray-400">
            <li>info@planbheloim.org</li>
            <li>+52 963 000 0000</li>
            <li>Comitán de Domínguez, Chiapas</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Plan B Ministerio Heloim. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-red-50 text-primary rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            Nuestra Historia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Acerca de <span className="text-primary">Nosotros</span>
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Plan B Ministerio Heloim nació con una visión clara: brindar un espacio donde las personas puedan tener un encuentro genuino con Dios, lejos de las distracciones de la vida cotidiana.
            </p>
            <p>
              Ubicados en la hermosa región de Comitán, Chiapas, organizamos campamentos y retiros que combinan la naturaleza, la aventura y la profundidad espiritual. Creemos que cuando nuestros planes fallan, el "Plan B" de Dios siempre es el mejor camino.
            </p>
            <p>
              Nuestro equipo está comprometido en crear experiencias seguras, divertidas y transformadoras para jóvenes y adultos que buscan renovar su fe y propósito.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden relative">
            <img 
              src="https://picsum.photos/seed/about/800/800" 
              alt="Comunidad Plan B" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs"
          >
            <div className="text-4xl font-bold text-primary mb-2">+1000</div>
            <div className="text-gray-600 font-medium">Vidas transformadas a través de nuestros campamentos</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function JoinModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl my-8 relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8">
          {step === 1 ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Únete al <span className="text-primary">Plan B</span></h3>
                <p className="text-gray-600">Déjanos tus datos y nos pondremos en contacto contigo para darte más información.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nombre completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Teléfono</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+52 000 000 0000" />
                </div>
                
                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-dark text-white py-4 rounded-xl font-medium hover:bg-primary transition-colors duration-300"
                  >
                    Enviar Información
                  </motion.button>
                </div>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h4>
              <p className="text-gray-600 mb-8">
                Gracias por tu interés. Nos pondremos en contacto contigo muy pronto.
              </p>
              <button 
                onClick={onClose}
                className="bg-dark text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CampInfoModal({ camp, onClose, onRegister }: { camp: any, onClose: () => void, onRegister: (camp: any) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl my-8 relative"
      >
        <div className="h-64 relative">
          <img 
            src={camp.image} 
            alt={camp.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 uppercase tracking-wider">
              Detalles del Evento
            </div>
            <h3 className="text-3xl font-bold leading-tight">{camp.title}</h3>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            {camp.description}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Fecha</p>
                <p className="font-semibold text-dark">
                  {camp.date.getDate()} al {camp.endDate.getDate()} de {monthNames[camp.date.getMonth()]}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Hora</p>
                <p className="font-semibold text-dark">{camp.time}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Lugar</p>
                <p className="font-semibold text-dark">{camp.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Disponibilidad</p>
                <p className="font-semibold text-dark">{camp.available} cupos de {camp.spots}</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 bg-gray-100 text-dark py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Cerrar
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose();
                onRegister(camp);
              }}
              className="flex-1 bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Reservar Lugar <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}



export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCamp, setSelectedCamp] = useState<any>(null);
  const [infoCamp, setInfoCamp] = useState<any>(null);
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
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
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
          <main>
            <Hero />
            <UpcomingEvents 
              onRegister={(camp) => setSelectedCamp(camp)} 
              onOpenCalendar={() => setShowCalendar(true)}
              onInfo={(camp) => setInfoCamp(camp)}
            />
            <AboutUs />
          </main>
          <Footer />
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
  );
}
