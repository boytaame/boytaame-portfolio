import { motion } from 'motion/react';

const Hero = ({ introDone = true }: { introDone?: boolean }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-cream flex items-center pt-32 pb-20 lg:pt-24 lg:pb-0 overflow-hidden">
      
      {/* Ambient Neon Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/20 blur-[120px] pointer-events-none mix-blend-screen opacity-50 animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-cyan/20 blur-[120px] pointer-events-none mix-blend-screen opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-pink-500/10 blur-[150px] pointer-events-none mix-blend-screen opacity-60 animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-8 xl:gap-12 lg:items-end">
          
          <div className="w-full lg:w-6/12 xl:w-7/12 space-y-8 lg:space-y-12 relative z-20 pb-20 lg:pb-0 pt-8 lg:pt-0">
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
              <p className="text-ink-muted text-xl leading-relaxed font-medium font-serif italic border-l-2 border-ink/10 pl-8">
                "A lifelong creator with a passion for bringing ideas to life through the intersection of code and design."
              </p>
              
              <div className="flex items-center space-x-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  className="bg-ink text-cream px-10 py-5 rounded-full font-bold tracking-widest text-[10px] transition-transform duration-300 shadow-lg hover:shadow-xl relative group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-neon-cyan transition-colors duration-300">GET IN TOUCH</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="w-[calc(100%+3rem)] -mx-6 lg:mx-0 lg:w-[45vw] xl:w-[50vw] lg:absolute lg:-right-[calc(50vw-50%)] lg:top-0 lg:bottom-0 relative mb-8 lg:mb-0 mt-8 lg:mt-0 flex items-center justify-end lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: introDone ? 1 : 0, scale: introDone ? 1 : 0.98 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen"
            >
              <div className="w-full h-full bg-transparent overflow-visible relative z-10 group transform-gpu flex justify-end">
                <img 
                  src="https://i.imgur.com/I1FOimr.png"
                  alt="Creative Workspace"
                  className="w-full lg:w-auto h-full object-cover lg:object-contain object-right transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />
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
