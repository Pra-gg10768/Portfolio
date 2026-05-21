import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'Physio-Aware Deepfake Detection',
    desc: 'A domain-aware detector using multi-ROI rPPG signals from facial video, focused on physiological consistency and honest cross-domain evaluation.',
    tags: ['PyTorch', 'Computer Vision', 'rPPG'],
    year: '2024-25',
    color: '#c8f064',
  },
  {
    num: '02',
    title: 'ML-Based Network Intrusion Detection',
    desc: 'A CICIDS2017 intrusion detection pipeline with careful feature handling, ensemble models, and SHAP explanations for security decisions.',
    tags: ['Scikit-learn', 'XGBoost', 'SHAP'],
    year: '2023-24',
    color: '#64c8f0',
  },
  {
    num: '03',
    title: 'Real-Time Queue Detection System',
    desc: 'A YOLO and Flask monitoring system for queue density, occlusion-aware detection, and operational alerts in crowded environments.',
    tags: ['YOLO', 'OpenCV', 'Flask'],
    year: '2025',
    color: '#f064c8',
  },
  {
    num: '04',
    title: 'Trip Telemetry Visualization',
    desc: 'A GPS and OBD-II workflow for route playback, stop detection, speed profiling, and spatial analysis from raw driving data.',
    tags: ['Mapbox', 'Deck.gl', 'Data Eng'],
    year: '2025',
    color: '#f0c864',
  },
  {
    num: '05',
    title: 'Farmer Digital Advisory Platform',
    desc: 'An early product system for agricultural data, market prices, and crop recommendations that shaped my move from rule-based logic toward visual and intelligent decision support.',
    tags: ['Product', 'Data', 'Advisory'],
    year: 'Early work',
    color: '#c8f064',
  },
];

export default function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-64%']);

  return (
    <section ref={ref} id="work" className="work-scroll-section">
      <div className="work-scroll-sticky">
        <div className="work-scroll-header">
          <div>
            <span className="label">Selected work</span>
            <h2 className="display">Research projects built with product discipline.</h2>
          </div>
          <p>
            A mix of research systems and freelance-ready builds: problem, implementation, evaluation, and delivery.
          </p>
        </div>

        <div className="work-progress-dots">
          {projects.map((project, index) => (
            <ProgressDot key={project.num} index={index} progress={scrollYProgress} />
          ))}
        </div>

        <div className="work-viewport">
          <motion.div className="work-track" style={{ x }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.num} project={project} index={index} progress={scrollYProgress} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgressDot({ index, progress }) {
  const total = projects.length - 1;
  const point = index / total;
  const scale = useTransform(progress, [point - 0.12, point, point + 0.12], [0.75, 1.45, 0.75]);
  const opacity = useTransform(progress, [point - 0.12, point, point + 0.12], [0.36, 1, 0.36]);

  return <motion.span style={{ scale, opacity }} />;
}

function ProjectCard({ project, index, progress }) {
  const [hovered, setHovered] = useState(false);
  const total = projects.length - 1;
  const point = index / total;
  const opacity = useTransform(progress, [point - 0.22, point, point + 0.22], [0.55, 1, 0.55]);
  const y = useTransform(progress, [point - 0.18, point, point + 0.18], [34, 0, -24]);

  return (
    <motion.article
      className="work-horizontal-card"
      style={{ '--project-color': project.color, opacity, y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="work-card-index">
        <span>{project.num}</span>
        <em>{project.year}</em>
      </div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="work-card-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <motion.a
        href="#contact"
        className="work-card-arrow"
        aria-label={`Discuss ${project.title}`}
        animate={{
          backgroundColor: hovered ? project.color : 'transparent',
          color: hovered ? '#0a0a0a' : 'var(--fg)',
        }}
      >
        <ArrowUpRight size={20} />
      </motion.a>
    </motion.article>
  );
}
