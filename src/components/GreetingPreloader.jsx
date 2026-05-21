import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'Hola',
  'Namaste',
  'Bonjour',
  '\u3053\u3093\u306b\u3061\u306f',
  '\u4f60\u597d',
  'Ciao',
  'Marhaba',
  'Hello',
];

const EASE = [0.76, 0, 0.24, 1];
const WORD_SLOT_MS = 950;

export default function GreetingPreloader({ onDone }) {
  const [index, setIndex] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => Math.min(prev + 1, words.length - 1));
    }, WORD_SLOT_MS);

    const doneTimer = window.setTimeout(() => {
      if (doneRef.current) return;
      doneRef.current = true;
      if (onDone) onDone();
    }, words.length * WORD_SLOT_MS + 450);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: EASE } }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (index + 1) / words.length }}
        transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 1,
          background: 'var(--accent)',
          transformOrigin: '0% 50%',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -38 }}
          transition={{ duration: 0.36, ease: EASE }}
          style={{
            position: 'absolute',
            fontSize: 'clamp(48px, 10vw, 80px)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            color: 'var(--fg)',
          }}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
