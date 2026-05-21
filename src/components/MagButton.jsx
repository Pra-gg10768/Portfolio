import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagButton({ children, className = '', onClick, href, variant = 'primary' }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
  }

  const handleMouseEnter = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.1s'
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileTap={{ scale: 0.96 }}
      style={{ display: 'inline-block' }}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`mag-btn mag-btn-${variant} ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
