import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Eye, LineChart, Network, Wheat } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'ML-Based Network Intrusion Detection',
    problem: 'Detect malicious network behavior without hiding the decision path.',
    evidence: 'CICIDS2017 preprocessing, ensemble comparison, SHAP explanations.',
    tags: ['Scikit-learn', 'XGBoost', 'SHAP'],
    year: '2023-24',
    icon: Network,
    href: 'https://github.com/Pra-gg10768',
  },
  {
    num: '02',
    title: 'Real-Time Queue Detection System',
    problem: 'Turn crowded camera frames into density signals and alerts.',
    evidence: 'YOLO detection, occlusion handling, thresholds, Flask monitoring.',
    tags: ['YOLO', 'OpenCV', 'Flask'],
    year: '2025',
    icon: Eye,
    href: 'https://github.com/Pra-gg10768',
  },
  {
    num: '03',
    title: 'Trip Telemetry Visualization',
    problem: 'Make raw GPS and OBD-II traces inspectable.',
    evidence: 'Route playback, stop detection, speed profiling, spatial analysis.',
    tags: ['Mapbox', 'Deck.gl', 'Data Eng'],
    year: '2025',
    icon: LineChart,
    href: 'https://github.com/Pra-gg10768',
  },
  {
    num: '04',
    title: 'Farmer Digital Advisory Platform',
    problem: 'Support crop and market decisions with useful product logic.',
    evidence: 'Advisory flows, market-aware recommendations, early product system.',
    tags: ['Product', 'Data', 'Advisory'],
    year: 'Early work',
    icon: Wheat,
    href: 'https://github.com/Pra-gg10768',
  },
];

export default function Work() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const line = useTransform(scrollYProgress, [0.08, 0.88], ['0%', '100%']);

  return (
    <section ref={ref} id="work" className="work-polished-section">
      <div className="work-polished-sticky">
        <div className="work-polished-header">
          <div>
            <span className="label">Research project index</span>
            <h2 className="display">A compact map of the work beyond the flagship project.</h2>
          </div>
          <p>
            The cards are intentionally quieter: each project gets a problem, evidence, stack, and proof exit. No filler,
            no fake complexity.
          </p>
        </div>

        <div className="work-polished-body">
          <div className="work-index-list">
            <div className="work-index-line" aria-hidden="true">
              <motion.span style={{ height: line }} />
            </div>
            {projects.map((project, index) => (
              <ProjectRow
                key={project.num}
                project={project}
                index={index}
                active={active === index}
                onActivate={() => setActive(index)}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <motion.aside
            className="work-context-panel"
            key={projects[active].title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <span>{projects[active].num}</span>
            <h3>{projects[active].title}</h3>
            <p>{projects[active].evidence}</p>
            <div>
              {projects[active].tags.map((tag) => (
                <em key={tag}>{tag}</em>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

const EASE = [0.16, 1, 0.3, 1];

function ProjectRow({ project, index, active, onActivate, progress }) {
  const start = 0.1 + index * 0.16;
  const opacity = useTransform(progress, [start - 0.08, start + 0.06, start + 0.24], [0.42, 1, 0.72]);
  const y = useTransform(progress, [start - 0.08, start + 0.06], [28, 0]);
  const Icon = project.icon;

  return (
    <motion.article
      className={active ? 'work-index-row active' : 'work-index-row'}
      style={{ opacity, y }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <div className="work-index-num">{project.num}</div>
      <div className="work-index-main">
        <div>
          <Icon size={18} />
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.problem}</p>
      </div>
      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
        <ArrowUpRight size={18} />
      </a>
    </motion.article>
  );
}
