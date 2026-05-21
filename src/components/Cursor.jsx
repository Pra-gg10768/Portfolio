import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const hasMoved = useRef(false)
  const rafId = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!hasMoved.current) {
        hasMoved.current = true
        ring.current = { x: e.clientX, y: e.clientY }
      }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.28)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.28)
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div className="cursor">
      <div ref={dotRef} className="cursor-dot" style={{ position: 'fixed' }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: 'fixed' }} />
    </div>
  )
}
