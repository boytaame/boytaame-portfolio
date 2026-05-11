import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$";
const TARGET_TEXT = "BOYTAAME";

export const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let scrambleTicks = 0;
    const MAX_SCRAMBLE_TICKS = 2; // How many times a letter scrambles before settling

    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setText(() => {
          const settled = TARGET_TEXT.slice(0, currentIndex);
          
          if (currentIndex >= TARGET_TEXT.length) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete();
            }, 800); // Admire the final text for a moment
            return settled;
          }

          // Scramble the current letter before moving to next
          const currentLetter = scrambleTicks < MAX_SCRAMBLE_TICKS 
            ? LETTERS[Math.floor(Math.random() * LETTERS.length)]
            : TARGET_TEXT[currentIndex];

          if (scrambleTicks >= MAX_SCRAMBLE_TICKS) {
            scrambleTicks = 0;
            currentIndex++;
          } else {
            scrambleTicks++;
          }

          return settled + currentLetter;
        });
      }, 40); // Fast, crisp typing speed
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  const isTypingDone = text === TARGET_TEXT;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream pointer-events-none"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-center relative">
        {/* Invisible ghost text to maintain fixed width and keep typing anchored left without shifting */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold text-transparent leading-[0.85] tracking-tighter uppercase whitespace-nowrap select-none pointer-events-none">
          {TARGET_TEXT}
        </h1>
        
        <div className="absolute inset-0 flex items-center">
          {!isTypingDone ? (
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold text-ink leading-[0.85] tracking-tighter uppercase origin-left select-none whitespace-nowrap flex items-center">
              {text}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-[0.5em] h-[0.85em] bg-ink ml-2 lg:ml-6"
              />
            </h1>
          ) : (
            <motion.h1 
              layoutId="hero-title"
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold text-ink leading-[0.85] tracking-tighter uppercase origin-left select-none whitespace-nowrap flex items-center"
            >
              {text}
            </motion.h1>
          )}
        </div>
      </div>
    </motion.div>
  );
};
