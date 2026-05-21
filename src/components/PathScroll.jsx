import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const waypoints = [
  { label: 'Modeling', detail: 'Training pipelines, evaluation loops, and practical model selection.', progress: 0.16, x: 14, y: 58 },
  { label: 'Vision', detail: 'OpenCV, YOLO, rPPG signals, and real-world visual inference.', progress: 0.38, x: 38, y: 34 },
  { label: 'Security', detail: 'Intrusion signals, explainability, anomaly patterns, and trusted decisions.', progress: 0.64, x: 64, y: 62 },
  { label: 'Delivery', detail: 'Dashboards, APIs, deployment-aware code, and product feedback loops.', progress: 0.86, x: 88, y: 40 },
];

const pathD = 'M 40 245 C 160 78 265 74 380 210 S 600 372 730 190 S 945 54 1120 188 S 1285 310 1400 126';

export default function PathScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const pathLength = useTransform(scrollYProgress, [0.04, 0.92], [0, 1]);
  const dotX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['3%', '24%', '49%', '72%', '94%']);
  const dotY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['61%', '30%', '57%', '34%', '46%']);

  return (
    <section ref={ref} className="path-scroll-section">
      <div className="path-scroll-sticky">
        <div className="path-scroll-heading">
          <span className="label">System journey</span>
          <h2 className="display">From raw signals to useful AI systems.</h2>
        </div>

        <div className="path-stage">
          <svg viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
            <path className="path-ghost" d={pathD} />
            <motion.path className="path-live" d={pathD} style={{ pathLength }} />
          </svg>
          <motion.div className="path-dot" style={{ left: dotX, top: dotY }} />

          {waypoints.map((wp, index) => (
            <Waypoint key={wp.label} wp={wp} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Waypoint({ wp, index, progress }) {
  const active = useTransform(progress, [wp.progress - 0.08, wp.progress, wp.progress + 0.08], [0, 1, 0.72]);
  const scale = useTransform(progress, [wp.progress - 0.08, wp.progress], [0.76, 1]);

  return (
    <motion.article
      className="path-waypoint"
      style={{
        left: `${wp.x}%`,
        top: `${wp.y}%`,
        opacity: active,
        scale,
      }}
    >
      <span>0{index + 1}</span>
      <h3>{wp.label}</h3>
      <p>{wp.detail}</p>
    </motion.article>
  );
}
