import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import AnimatedLink from './v1/AnimatedLink'
import ThemeToggleButton from './v1/ThemeToggleButton'
import { Skiper58NavLink } from './v1/TextRoll'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsub = scrollYProgress.onChange((v) => setScrolled(v > 0.02))
    return unsub
  }, [scrollYProgress])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '12px 34px' : '24px 34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          background: scrolled ? 'color-mix(in srgb, var(--bg), transparent 14%)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 800,
            color: 'var(--fg)',
            letterSpacing: '-0.04em'
          }}>
            Pragg
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          {links.map((l) => (
            <Skiper58NavLink key={l.label} href={l.href}>{l.label}</Skiper58NavLink>
          ))}
          <ThemeToggleButton />
          <AnimatedLink href="#contact" variant="fill">
            Hire me
          </AnimatedLink>
        </div>
      </motion.nav>

      {/* Scroll progress */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--accent)',
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          zIndex: 101,
        }}
      />
    </>
  )
}
