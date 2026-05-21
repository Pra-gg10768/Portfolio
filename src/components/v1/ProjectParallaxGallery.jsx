import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Activity, BrainCircuit, Code2, Database, LineChart, ShieldCheck } from 'lucide-react';

const visuals = [
  { title: 'rPPG signal map', meta: 'Vision research', color: 'var(--skiper-accent)', icon: Activity },
  { title: 'Intrusion telemetry', meta: 'Security ML', color: 'var(--skiper-cyan)', icon: ShieldCheck },
  { title: 'YOLO queue frame', meta: 'Real-time CV', color: 'var(--skiper-magenta)', icon: BrainCircuit },
  { title: 'Trip analytics', meta: 'Spatial data', color: 'var(--skiper-amber)', icon: LineChart },
  { title: 'Feature pipeline', meta: 'Data systems', color: 'var(--skiper-cyan)', icon: Database },
  { title: 'Model evaluation', meta: 'Research code', color: 'var(--skiper-accent)', icon: Code2 },
];

export default function ProjectParallaxGallery() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [72, -72]);
  const yFast = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-88, 88]);

  return (
    <section ref={ref} className="project-gallery" aria-label="Project visual gallery">
      <div className="project-gallery-copy">
        <span className="label">Visual systems</span>
        <h3 className="display">Signals, dashboards, and model traces in motion.</h3>
      </div>

      <div className="project-gallery-columns">
        <motion.div className="project-gallery-column" style={{ y: ySlow }}>
          {visuals.slice(0, 3).map((item) => (
            <VisualCard key={item.title} item={item} />
          ))}
        </motion.div>
        <motion.div className="project-gallery-column project-gallery-column-offset" style={{ y: yFast }}>
          {visuals.slice(3).map((item) => (
            <VisualCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function VisualCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="project-visual-card" style={{ '--visual-accent': item.color }}>
      <div className="project-visual-grid">
        <div className="project-visual-orbit" />
        <div className="project-visual-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="project-visual-content">
        <Icon size={18} />
        <div>
          <h4>{item.title}</h4>
          <p>{item.meta}</p>
        </div>
      </div>
    </article>
  );
}
