import { motion } from 'motion/react';

const Hero = ({ introDone = true }: { introDone?: boolean }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-cream flex items-center pt-32 pb-20 lg:pt-24 lg:pb-0 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-8 xl:gap-12 lg:items-end">
          
          <div className="w-full lg:w-7/12 xl:w-8/12 space-y-8 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-ink/20" />
                <p className="text-ink-muted text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">Creative Developer</p>
              </div>
            </motion.div>

            <div className="relative inline-block w-full mb-4 pb-2">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl 2xl:text-[10rem] font-bold text-transparent leading-[0.85] tracking-tighter uppercase whitespace-nowrap select-none pointer-events-none border-none outline-none">
                BOYTAAME
              </h1>
              {introDone && (
                <motion.h1 
                  layoutId="hero-title"
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl 2xl:text-[10rem] font-bold text-ink leading-[0.85] tracking-tighter uppercase whitespace-nowrap origin-left"
                  style={{ zIndex: 150 }}
                >
                  BOYTAAME
                </motion.h1>
              )}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: introDone ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-lg space-y-8"
            >
              <p className="text-ink-muted text-2xl leading-relaxed font-medium font-serif italic border-l-2 border-ink/10 pl-8">
                "I help small and medium businesses look more professional online and turn visitors into customers."
              </p>
              
              <div className="flex items-center space-x-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  className="bg-ink text-cream px-10 py-5 rounded-full font-bold tracking-widest text-[10px] transition-transform duration-300 shadow-lg hover:shadow-xl relative group overflow-hidden"
                >
                  <span className="relative z-10">GET IN TOUCH</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="w-full max-w-sm md:max-w-md mx-auto lg:mx-0 lg:max-w-none lg:w-5/12 xl:w-4/12 relative mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, rotate: 2 }}
              animate={{ opacity: introDone ? 1 : 0, scale: introDone ? 1 : 0.98, rotate: introDone ? 0 : 2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 border border-ink/5 rounded-[40px] -rotate-6 pointer-events-none" />
              <div className="aspect-[4/5] w-full bg-ink rounded-3xl overflow-hidden shadow-xl relative z-10 group transform-gpu">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                  alt="Creative Workspace"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-cream border border-ink/10 rounded-full flex items-center justify-center rotate-12 z-20 shadow-xl">
                <span className="text-[8px] font-bold tracking-widest text-center uppercase leading-tight">
                  Born <br /> to <br /> Create
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative vertical text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="absolute top-1/2 -right-12 -translate-y-1/2 text-vertical hidden xl:block"
      >
        <span className="text-[10rem] font-bold text-ink/[0.03] select-none tracking-tighter">PORTFOLIO</span>
      </motion.div>
    </section>
  );
};

export default Hero;
