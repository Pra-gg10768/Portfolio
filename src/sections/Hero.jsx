import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BrainCircuit, Cpu, Radar, ShieldCheck } from 'lucide-react';
import MagButton from '../components/MagButton';

const EASE = [0.16, 1, 0.3, 1];

const proofPoints = [
  ['01', 'Vision', 'rPPG, YOLO, OpenCV'],
  ['02', 'Security', 'NIDS, SHAP, anomaly signals'],
  ['03', 'Freelance', 'Applied ML systems that ship'],
];

const signalRows = [
  { label: 'physio signal', value: '0.91', color: 'var(--skiper-accent)' },
  { label: 'network risk', value: '0.76', color: 'var(--skiper-cyan)' },
  { label: 'domain shift', value: '0.48', color: 'var(--skiper-magenta)' },
  { label: 'model trust', value: '0.84', color: 'var(--skiper-amber)' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 22 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section ref={ref} className="hero-redesign">
      <motion.div className="hero-motion-field" style={{ y, opacity, scale }}>
        <div className="hero-kicker">
          <span>AI/ML Engineer</span>
          <span>Computer Vision</span>
          <span>Freelance + Research Projects</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            >
              Building practical AI systems across vision, security, telemetry, and real-world product workflows.
            </motion.p>

            <h1 className="hero-title" aria-label="Pragnyan Satapathy">
              <span className="hero-title-line">
                {'Pragnyan'.split('').map((char, index) => (
                  <motion.span
                    key={`first-${index}`}
                    initial={{ y: '112%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.22 + index * 0.035 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="hero-title-line">
                {'Satapathy'.split('').map((char, index) => (
                  <motion.span
                    key={`last-${index}`}
                    initial={{ y: '112%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.44 + index * 0.035 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.div
              className="hero-bottom-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.82 }}
            >
              <p>
                I turn research ideas into working systems: model pipelines, dashboards, explainability, and deployable AI features.
              </p>
              <div className="hero-actions">
                <MagButton href="#work" variant="primary">
                  View projects <ArrowUpRight size={16} />
                </MagButton>
                <MagButton href="#contact" variant="outline">
                  Contact
                </MagButton>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-console-wrap"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            initial={{ opacity: 0, y: 36, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.55 }}
            style={{ rotateX, rotateY }}
          >
            <ResearchConsole />
          </motion.div>
        </div>

        <div className="hero-proof-grid">
          {proofPoints.map(([num, label, detail], index) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 1 + index * 0.08 }}
            >
              <span>{num}</span>
              <strong>{label}</strong>
              <p>{detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.a
        className="hero-scroll-cue"
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35 }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

function ResearchConsole() {
  return (
    <div className="hero-console" aria-label="Animated research console">
      <div className="hero-console-top">
        <div>
          <span className="label">Capability map</span>
          <h2>Research x Product</h2>
        </div>
        <div className="hero-console-status">
          <span />
          Online
        </div>
      </div>

      <div className="hero-console-main">
        <div className="hero-radar">
          <motion.div
            className="hero-radar-sweep"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <Radar size={56} />
          <motion.span className="hero-radar-dot dot-a" animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.4, repeat: Infinity }} />
          <motion.span className="hero-radar-dot dot-b" animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }} />
          <motion.span className="hero-radar-dot dot-c" animate={{ scale: [1, 1.45, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.1, repeat: Infinity, delay: 1 }} />
        </div>

        <div className="hero-signal-list">
          {signalRows.map((row, index) => (
            <div key={row.label} className="hero-signal-row" style={{ '--row-color': row.color }}>
              <div>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </div>
              <div className="hero-signal-track">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: Number(row.value) }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.9 + index * 0.08 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-console-footer">
        <div><BrainCircuit size={18} /> ML prototypes</div>
        <div><ShieldCheck size={18} /> trustworthy AI</div>
        <div><Cpu size={18} /> freelance delivery</div>
      </div>
    </div>
  );
}
