import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function TextRoll({ children, className = '', center = false }) {
  const text = String(children);

  return (
    <span className={`text-roll ${center ? 'text-roll-center' : ''} ${className}`} aria-label={text}>
      <span className="text-roll-line" aria-hidden="true">
        {[...text].map((char, index) => (
          <motion.span
            key={`${char}-${index}-a`}
            className="text-roll-char"
            variants={{
              rest: { y: '0%' },
              hover: { y: '-110%' },
            }}
            transition={{ duration: 0.48, ease: EASE, delay: index * 0.018 }}
          >
            {char === ' ' ? '\u00a0' : char}
          </motion.span>
        ))}
      </span>
      <span className="text-roll-line text-roll-line-next" aria-hidden="true">
        {[...text].map((char, index) => (
          <motion.span
            key={`${char}-${index}-b`}
            className="text-roll-char"
            variants={{
              rest: { y: '110%' },
              hover: { y: '0%' },
            }}
            transition={{ duration: 0.48, ease: EASE, delay: index * 0.018 }}
          >
            {char === ' ' ? '\u00a0' : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export function Skiper58NavLink({ href, children }) {
  return (
    <motion.a className="skiper-nav-link" href={href} initial="rest" whileHover="hover" animate="rest">
      <TextRoll>{children}</TextRoll>
    </motion.a>
  );
}
