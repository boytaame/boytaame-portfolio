import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Intro } from './components/Intro';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className={`min-h-screen ${!introDone ? 'h-screen overflow-hidden' : ''} bg-cream`}>
      <AnimatePresence>
        {!introDone && <Intro key="intro" onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Header />
      </motion.div>

      <Hero introDone={introDone} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <About />
        <Services />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
