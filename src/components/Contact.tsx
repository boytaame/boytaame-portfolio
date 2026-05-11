import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-ink text-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-cream/40 text-[10px] font-bold tracking-[0.5em] uppercase italic">The Concluding Chapter</p>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none italic">
              Have an idea you <br /> want built? Let's talk
            </h2>
          </motion.div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/+6281388286665" 
            target="_blank" 
            className="inline-block bg-cream text-ink px-16 py-5 rounded-full font-bold text-sm tracking-widest transition-transform duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform-gpu"
          >
            CONNECT WITH ME
          </motion.a>
          
          <div className="flex justify-center pt-8">
            <motion.a 
              whileHover={{ y: -5 }}
              href="https://www.instagram.com/kevin.jerome_/" 
              target="_blank" 
              className="p-4 rounded-full border border-cream/20 hover:border-cream/60 transition-colors duration-300 group"
            >
              <Instagram size={24} className="text-cream transition-transform duration-300 group-hover:scale-110" />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4 opacity-50">
            <div className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center border border-cream/20">
              <span className="text-cream font-bold text-lg font-serif">B</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest">BOYTAAME © 2026</span>
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] opacity-30 text-center md:text-right">
            PASSION • CREATIVITY • CODE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
