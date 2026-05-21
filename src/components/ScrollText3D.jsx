import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PHRASE = 'BUILDING DIGITAL EXPERIENCES';
const words = PHRASE.split(' ');
const center = (words.length - 1) / 2;

export default function ScrollText3D() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section ref={ref} className="skiper31-section" aria-label={PHRASE}>
      <div className="skiper31-sticky">
        <div className="skiper31-copy">
          <span className="label">Creative direction</span>
          <p>Research depth, product judgment, and motion-led interfaces in one working portfolio.</p>
        </div>

        <h2 className="skiper31-title">
          {words.map((word, index) => (
            <ScrollWord key={word} word={word} index={index} progress={scrollYProgress} />
          ))}
        </h2>
      </div>
    </section>
  );
}

function ScrollWord({ word, index, progress }) {
  const distance = Math.abs(index - center);
  const start = Math.min(0.78, 0.08 + distance * 0.08);
  const end = Math.min(0.98, start + 0.34);
  const rotateY = useTransform(progress, [start, end], [72, 0]);
  const z = useTransform(progress, [start, end], [-220, 0]);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const color = useTransform(progress, [0.68, 0.94], ['var(--fg)', 'var(--accent)']);

  return (
    <motion.span
      style={{
        rotateY,
        z,
        opacity,
        color,
        transformStyle: 'preserve-3d',
      }}
    >
      {word}
    </motion.span>
  );
}
