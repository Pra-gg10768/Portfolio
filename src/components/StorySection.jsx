import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StorySection({ title, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ padding: '6rem 2rem', position: 'relative' }}>
      <motion.h2
        className="display"
        style={{ textAlign: 'center', marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
