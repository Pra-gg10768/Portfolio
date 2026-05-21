import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export function RevealText({ children, delay = 0, className = '', as = 'span' }) {
  const Tag = as
  return (
    <span style={{ overflow: 'hidden', display: 'block' }}>
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className={className}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const yMap = { up: 24, down: -24, left: 24, right: -24 }
  const xMap = { left: 24, right: -24, up: 0, down: 0 }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: direction === 'up' || direction === 'down' ? yMap[direction] : 0,
        x: direction === 'left' || direction === 'right' ? xMap[direction] : 0
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ children, staggerDelay = 0.08, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
