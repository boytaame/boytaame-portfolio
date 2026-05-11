import { motion } from 'motion/react';

const About = () => {
  const skills = [
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'C#', color: 'bg-purple-600' },
    { name: 'AI Optimization', color: 'bg-ink' }
  ];

  return (
    <section id="about" className="relative py-32 bg-cream border-y border-ink/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 lg:space-y-12"
            >
              <div className="space-y-4">
                <p className="text-ink-muted text-[10px] font-bold tracking-[0.4em] uppercase">▶ The Narrative</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink italic leading-tight">
                  Creativity, <br />
                  <span className="not-italic font-sans text-ink/40">Coded.</span>
                </h2>
              </div>

              <div className="space-y-6 lg:space-y-8 text-ink text-lg lg:text-xl leading-relaxed">
                <p className="font-serif italic text-xl lg:text-2xl text-ink/80 leading-snug border-l-4 border-ink/10 pl-6 lg:pl-8 py-2">
                  "I spent my days carving play-doh and drawing stories until I discovered programming—the ultimate landscape for creation."
                </p>
                <div className="space-y-6 text-base font-medium text-ink-muted leading-loose">
                  <p>
                    My journey began with the tactile world of flipbooks and stories. Transitioning to software and web development allowed me to breathe life into those static ideas. From building mobile apps to Unity game development, I've honed a multi-disciplinary approach to digital craft.
                  </p>
                  <p>
                    Today, I leverage AI not just as a tool, but as a force multiplier. Its important to understand the balance between automated efficiency and manual craftsmanship to deliver at the highest level.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -2 }}
                    className="flex items-center space-x-3 bg-white px-5 py-2.5 rounded-full border border-ink/5 shadow-sm"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                    <span className="text-ink text-[10px] font-bold tracking-[0.2em] uppercase">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] bg-ink/5 rounded-[3rem] overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                alt="Creative Workspace"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform transform-gpu"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-12 left-12 right-12 bg-ink/80 border border-white/10 p-8 rounded-3xl">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase">Current Status</p>
                    <p className="text-white font-serif italic text-lg leading-none">Founder & Creator</p>
                  </div>
                  <div className="text-white/20 text-4xl font-bold font-serif opacity-50">01</div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
