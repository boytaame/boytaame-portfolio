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
    <section id="about" className="relative py-32 lg:py-0 min-h-screen bg-cream border-y border-ink/5 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 xl:gap-12 justify-end lg:items-center">
          
          <div className="w-[calc(100%+3rem)] -mx-6 lg:mx-0 lg:w-[45vw] xl:w-[50vw] lg:absolute lg:-left-[calc(50vw-50%)] lg:top-0 lg:bottom-0 relative mb-8 lg:mb-0 mt-8 lg:mt-0 flex items-center justify-start lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen group"
            >
              <div className="w-full h-full bg-transparent overflow-hidden relative z-10 transform-gpu flex justify-start">
                <img 
                  src="https://i.pinimg.com/736x/50/4c/94/504c9430631cde54eb8f5f15e24273c2.jpg"
                  alt="Creative Workspace"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute bottom-12 right-12 lg:right-12 xl:right-24 bg-ink/90 border border-white/10 p-8 rounded-3xl w-auto shadow-2xl backdrop-blur-sm z-20">
                  <div className="flex justify-between items-end gap-12">
                    <div className="space-y-1">
                      <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase">Current Status</p>
                      <p className="text-white font-serif italic text-lg leading-none">Founder & Creator</p>
                    </div>
                    <div className="text-white/20 text-4xl font-bold font-serif opacity-50">01</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-6/12 xl:w-5/12 space-y-8 lg:space-y-12 relative z-20 pb-20 lg:pb-0 pt-8 lg:pt-0"
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
                    My journey began with the tactile world of flipbooks and stories. Transitioning to software development allowed me to breathe life into those static ideas. From building mobile apps to Unity game development, I've honed a multi-disciplinary approach to digital craft.
                  </p>
                  <p>
                    Today, I leverage AI not just as a tool, but as a force multiplier. In entrepreneurship, speed is the differentiator. Its important to understand the balance between automated efficiency and manual craftsmanship to deliver at the highest level.
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

          </div>
        </div>
    </section>
  );
};

export default About;
