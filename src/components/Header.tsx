import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-8"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-cream/95 backdrop-blur-md border border-ink/5 px-4 sm:px-8 py-3 sm:py-4 rounded-[2rem] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
              <span className="text-cream font-bold text-sm font-serif">B</span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-ink hidden sm:block">BOYTAAME</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-end space-x-12 flex-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-ink-muted hover:text-ink transition-colors duration-300 text-[10px] font-bold tracking-[0.2em]"
            >
              NARRATIVE
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-ink-muted hover:text-ink transition-colors duration-300 text-[10px] font-bold tracking-[0.2em]"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-ink text-cream px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md transform-gpu"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Drops */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-cream/95 backdrop-blur-md border border-ink/5 rounded-2xl p-4 flex flex-col space-y-4 shadow-xl"
            >
              
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-ink text-xs font-bold tracking-[0.2em] py-2 px-4 hover:bg-ink/5 rounded-lg transition-colors"
              >
                NARRATIVE
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-ink text-xs font-bold tracking-[0.2em] py-2 px-4 hover:bg-ink/5 rounded-lg transition-colors"
              >
                PROJECTS
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-ink text-cream text-xs font-bold tracking-[0.2em] py-3 px-4 rounded-xl transition-colors"
              >
                CONTACT
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
