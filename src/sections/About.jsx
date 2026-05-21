import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';

const timeline = [
  { year: '2025', event: 'Built vehicle telemetry visualizations from GPS and OBD-II driving data' },
  { year: '2024', event: 'Deepened computer vision and security research through lab-driven project work' },
  { year: '2023', event: 'Winner - Smart India Hackathon' },
  { year: '2021', event: 'Started formal computer science training and software foundations' },
];

const strengths = [
  { label: 'ML modeling', value: 0.88 },
  { label: 'Computer vision', value: 0.84 },
  { label: 'Product systems', value: 0.78 },
  { label: 'Client delivery', value: 0.86 },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const cardYOne = useTransform(scrollYProgress, [0, 1], [42, -58]);
  const cardYTwo = useTransform(scrollYProgress, [0, 1], [-24, 52]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-4, 5]);

  return (
    <section id="about" ref={ref} className="about-motion-section">
      <div className="about-motion-grid">
        <div className="about-motion-copy">
          <span className="label">About me</span>
          <h2 className="display">I am Pragg, an AI/ML engineer shaped by research problems and product constraints.</h2>
          <p>
            My interest started with a simple question: how does software learn to interpret the real world? That curiosity
            moved from foundations in computer science into farmer-facing digital tools, network intrusion detection,
            rPPG-based deepfake detection, queue monitoring, and telemetry visualization. I keep the freelance side of my
            profile visible because I like work that has to survive users, deadlines, and messy data.
          </p>
          <a className="about-github-link" href="https://github.com/Pra-gg10768" target="_blank" rel="noreferrer">
            <Github size={17} />
            @Pra-gg10768
          </a>
        </div>

        <div className="about-motion-stage">
          <motion.div className="about-floating-card card-one" style={{ y: cardYOne, rotate: cardRotate }}>
            <span>Current focus</span>
            <strong>Vision, security, and useful AI products</strong>
          </motion.div>
          <motion.div className="about-floating-card card-two" style={{ y: cardYTwo }}>
            <span>Research habit</span>
            <strong>Prototype fast, validate honestly</strong>
          </motion.div>

          <div className="about-strength-panel">
            <span className="label">Stack strength</span>
            {strengths.map((item, index) => (
              <Strength key={item.label} item={item} index={index} />
            ))}
          </div>

          <div className="about-journey">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <span>{item.year}</span>
                <p>{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Strength({ item, index }) {
  return (
    <div className="about-strength-row">
      <div>
        <span>{item.label}</span>
        <em>{Math.round(item.value * 100)}%</em>
      </div>
      <div className="about-strength-track">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: item.value }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        />
      </div>
    </div>
  );
}
