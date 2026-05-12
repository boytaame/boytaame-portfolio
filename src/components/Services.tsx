import { motion } from 'motion/react';
import { Mouse, Target, Dumbbell, BookImage, NotebookTabs, Languages, ArrowUpRight } from 'lucide-react';

const projectThemes = [
  {
    border: 'border-neon-purple/20 hover:border-neon-purple/50 hover:ring-neon-purple/30',
    shadow: 'shadow-lg shadow-neon-purple/5 hover:shadow-[0_0_30px_-5px_rgba(171,75,255,0.3)]',
    iconBg: 'bg-neon-purple text-cream',
    iconShadow: 'shadow-[0_0_15px_rgba(171,75,255,0.5)]',
    text: 'text-neon-purple',
    hoverBg: 'group-hover:bg-neon-purple group-hover:border-neon-purple group-hover:text-cream',
    patternColor: 'text-neon-purple',
  },
  {
    border: 'border-neon-cyan/20 hover:border-neon-cyan/50 hover:ring-neon-cyan/30',
    shadow: 'shadow-lg shadow-neon-cyan/5 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.3)]',
    iconBg: 'bg-neon-cyan text-cream',
    iconShadow: 'shadow-[0_0_15px_rgba(0,229,255,0.5)]',
    text: 'text-neon-cyan',
    hoverBg: 'group-hover:bg-neon-cyan group-hover:border-neon-cyan group-hover:text-cream',
    patternColor: 'text-neon-cyan',
  },
  {
    border: 'border-pink-500/20 hover:border-pink-500/50 hover:ring-pink-500/30',
    shadow: 'shadow-lg shadow-pink-500/5 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]',
    iconBg: 'bg-pink-500 text-cream',
    iconShadow: 'shadow-[0_0_15px_rgba(236,72,153,0.5)]',
    text: 'text-pink-500',
    hoverBg: 'group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-cream',
    patternColor: 'text-pink-500',
  },
  {
    border: 'border-blue-500/20 hover:border-blue-500/50 hover:ring-blue-500/30',
    shadow: 'shadow-lg shadow-blue-500/5 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    iconBg: 'bg-blue-500 text-cream',
    iconShadow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',
    text: 'text-blue-500',
    hoverBg: 'group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-cream',
    patternColor: 'text-blue-500',
  },
  {
    border: 'border-neon-purple/20 hover:border-neon-purple/50 hover:ring-neon-purple/30',
    shadow: 'shadow-lg shadow-neon-purple/5 hover:shadow-[0_0_30px_-5px_rgba(171,75,255,0.3)]',
    iconBg: 'bg-neon-purple text-cream',
    iconShadow: 'shadow-[0_0_15px_rgba(171,75,255,0.5)]',
    text: 'text-neon-purple',
    hoverBg: 'group-hover:bg-neon-purple group-hover:border-neon-purple group-hover:text-cream',
    patternColor: 'text-neon-purple',
  },
  {
    border: 'border-neon-cyan/20 hover:border-neon-cyan/50 hover:ring-neon-cyan/30',
    shadow: 'shadow-lg shadow-neon-cyan/5 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.3)]',
    iconBg: 'bg-neon-cyan text-cream',
    iconShadow: 'shadow-[0_0_15px_rgba(0,229,255,0.5)]',
    text: 'text-neon-cyan',
    hoverBg: 'group-hover:bg-neon-cyan group-hover:border-neon-cyan group-hover:text-cream',
    patternColor: 'text-neon-cyan',
  }
];

const ProjectPattern = ({ index, className }: { index: number, className?: string }) => {
  const commonClasses = `absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-[0.12] group-hover:opacity-[0.35] transition-opacity duration-700 pointer-events-none ${className}`;

  switch (index) {
    case 0:
      return (
        <svg className={commonClasses} viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 40,0 100,60 100,100 60,100 0,40" fill="currentColor" />
          <polygon points="20,0 60,0 100,40 100,80 80,100 0,20" fill="currentColor" opacity="0.5" />
          <polygon points="0,60 40,100 0,100" fill="currentColor" />
          <polygon points="100,0 100,20 80,0" fill="currentColor" />
        </svg>
      );
    case 1:
      return (
        <svg className={commonClasses} viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="0" y="0" width="30" height="100" fill="currentColor" />
          <rect x="40" y="0" width="20" height="100" fill="currentColor" opacity="0.6" />
          <rect x="70" y="0" width="30" height="100" fill="currentColor" opacity="0.3" />
          <rect x="0" y="25" width="100" height="15" fill="currentColor" opacity="0.8" />
          <rect x="0" y="60" width="100" height="25" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case 2:
      return (
        <svg className={commonClasses} viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="35" y="0" width="30" height="100" fill="currentColor" />
          <rect x="0" y="35" width="100" height="30" fill="currentColor" />
          <rect x="10" y="10" width="80" height="80" fill="currentColor" opacity="0.4" />
          <rect x="25" y="25" width="50" height="50" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case 3:
      return (
        <svg className={commonClasses} viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,20 50,70 100,20 100,40 50,90 0,40" fill="currentColor" />
          <polygon points="0,50 50,100 100,50 100,70 50,120 0,70" fill="currentColor" opacity="0.6" />
          <polygon points="0,-10 50,40 100,-10 100,10 50,60 0,10" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case 4:
      return (
        <svg className={commonClasses} viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,100 100,50 50,0" fill="currentColor" />
          <polygon points="0,50 50,100 0,100" fill="currentColor" opacity="0.6" />
          <polygon points="50,0 100,50 100,0" fill="currentColor" opacity="0.3" />
          <polygon points="0,100 100,0 100,30 30,100" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case 5:
      return (
        <svg className={commonClasses} viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" opacity="0.8" />
          <polygon points="50,15 85,50 50,85 15,50" fill="currentColor" opacity="0.5" />
          <polygon points="50,30 70,50 50,70 30,50" fill="currentColor" opacity="0.3" />
          <rect x="45" y="0" width="10" height="100" fill="currentColor" opacity="0.4" />
          <rect x="0" y="45" width="100" height="10" fill="currentColor" opacity="0.4" />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const projects = [
    {
      icon: BookImage,
      title: 'Class of Cards',
      href: 'https://class-of-cards.vercel.app/',
      ai: '7/10',
      desc: 'Collaborative character-driven card game.',
      tech: 'Vite',
      size: 'lg',
      role: 'Lead Developer',
      status: 'Live',
      details: ['Dynamic Character Sheets', 'Turn-based Strategy', 'Multiplayer Engine']
    },
    {
      icon: NotebookTabs,
      title: 'Accounting Automator',
      href: 'https://docs.google.com/spreadsheets/d/1l_lQvONdSKrFVlOF-JvbTvLpzymPwdqjjgaaGXsh_nk/edit?gid=2095291761#gid=2095291761',
      ai: '10/10',
      desc: 'Full-cycle accounting automation using Apps Script.',
      tech: 'JavaScript',
      size: 'md',
      role: 'Automation Architect',
      status: 'Production',
      details: ['Ledger Integration', 'Auto-reconciliation', 'Financial Reporting']
    },
    {
      icon: Dumbbell,
      title: 'MaxSync Tracker',
      href: 'https://boytaame-max.github.io/GymSync/',
      ai: '3/10',
      desc: 'Personalized weightlifting and rest optimization.',
      tech: 'Vanilla JS',
      size: 'md',
      role: 'Developer',
      status: 'Beta',
      details: ['RPE Management', 'Volume Tracking', 'Rest Timer Engine']
    },
    {
      icon: Mouse,
      title: 'CPS Testing',
      href: 'https://boytaame.github.io/ClickSpeedTest-boytaame/',
      ai: '2/10',
      desc: 'High-performance click speed analytics tool.',
      tech: 'React',
      size: 'sm',
      role: 'Developer',
      status: 'Live',
      details: ['Click Frequency Analysis', 'Visual Feedback']
    },
    {
      icon: Target,
      title: '3D Aim Trainer',
      href: '#',
      ai: '2/10',
      desc: 'Precision training environment for competitive play.',
      tech: 'Unity/C#',
      size: 'sm',
      role: 'Developer',
      status: 'Prototype',
      details: ['Flick Training', 'Target Tracking']
    },
    {
      icon: Languages,
      title: 'Global English',
      href: 'https://drive.google.com/file/d/1aNQVfmbRSFueHkNio4VIrXyKzfKrvleC/view?usp=sharing',
      ai: '0/10',
      desc: 'C1 Level proficiency, self-taught since childhood.',
      tech: 'CEFR C1',
      size: 'sm',
      role: 'Bilingual',
      status: 'Certified',
      details: ['Advanced Communication', 'Business English']
    }
  ];

  return (
    <section id="projects" className="py-32 bg-cream overflow-hidden relative">
      
      {/* Ambient Neon Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_60%)] pointer-events-none mix-blend-screen opacity-50 transform-gpu" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(0,229,255,0.1)_0%,transparent_60%)] pointer-events-none mix-blend-screen opacity-40 transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <p className="text-neon-cyan text-[10px] font-bold tracking-[0.4em] uppercase font-sans">▶ Selected Works</p>
            <h2 className="text-6xl md:text-8xl font-bold text-ink italic tracking-tight">Recent <br /> <span className="italic bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Artifacts.</span></h2>
          </div>
          <div className="max-w-xs space-y-4">
            <p className="text-ink-muted font-medium text-sm leading-relaxed border-l-2 border-ink/10 pl-6 py-1">
              A curated collection of projects exploring the boundaries of automation, design, and interactive experiences.
            </p>
          </div>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6 md:auto-rows-[250px] lg:auto-rows-[230px]"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const sizeClass = 'md:col-span-2 md:row-span-2 lg:col-span-2';
            const paddingClass = 'p-6 md:p-8';
            const theme = projectThemes[index % projectThemes.length];

            return (
              <motion.a
                key={index}
                href={project.href}
                target="_blank"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1]
                    }
                  }
                }}
                className={`${sizeClass} group relative bg-ink/5 rounded-[2rem] ${paddingClass} overflow-hidden flex flex-col min-h-[300px] md:min-h-0 transition-all duration-500 border transform-gpu ring-1 ring-transparent hover:-translate-y-1 ${theme.border} ${theme.shadow}`}
              >
                {/* Background Pattern */}
                <ProjectPattern index={index} className={theme.patternColor} />

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-7 text-7xl font-serif italic text-ink/[0.03] font-bold pointer-events-none select-none group-hover:text-ink/[0.06] transition-colors duration-500">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <div className={`text-white p-3 rounded-2xl group-hover:scale-105 transition-transform duration-500 w-fit shadow-lg ${theme.iconBg} ${theme.iconShadow}`}>
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[7px] font-bold tracking-[0.25em] text-ink/30 uppercase">Function</p>
                      <p className="text-[10px] font-bold text-ink uppercase tracking-tight">{project.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-3">
                    <div className="space-y-1 w-16">
                      <div className="flex justify-between items-center">
                        <span className="text-[6px] font-bold tracking-widest text-ink/20 uppercase">AI</span>
                        <span className="text-[8px] font-bold text-ink/40">{project.ai}</span>
                      </div>
                      <div className="h-0.5 bg-ink/5 rounded-full overflow-hidden w-full">
                        <motion.div 
                          variants={{
                            hidden: { scaleX: 0 },
                            show: { scaleX: parseInt(project.ai) / 10, transition: { duration: 1.2, delay: 0.4 } }
                          }}
                          className={`h-full opacity-60 group-hover:opacity-100 transition-opacity origin-left will-change-transform ${theme.iconBg}`}
                        />
                      </div>
                    </div>
                    <div className={`px-2 py-0.5 border border-ink/10 rounded transition-colors duration-300 group-hover:text-white ${theme.hoverBg}`}>
                      <span className="text-[6px] font-bold tracking-[0.1em] uppercase leading-none">{project.status}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 py-6 mb-auto">
                  {project.details && (
                    <div className="flex flex-col space-y-1.5">
                      {project.details.slice(0, 3).map((detail, i) => (
                        <div key={i} className="flex items-center space-x-2 text-ink/40 group-hover:text-ink/60 transition-colors">
                          <div className={`w-1 h-1 rounded-full shrink-0 opacity-50 ${theme.iconBg}`} />
                          <span className="text-[8px] font-bold uppercase tracking-wider">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative z-10 space-y-4 mt-4">
                  <div className="h-px bg-ink/5 w-full" />
                  
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.split('/').map((t, i) => (
                        <span key={i} className="text-[8px] font-bold tracking-widest text-ink/40 uppercase">
                          #{t.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-ink group-hover:translate-x-1 transition-transform duration-500 leading-tight">{project.title}</h3>
                        <p className="text-ink-muted text-[10px] font-medium leading-relaxed max-w-[180px] mt-1">
                          {project.desc}
                        </p>
                      </div>
                      <div className={`opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform] duration-300 ml-2 ${theme.text}`}>
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
