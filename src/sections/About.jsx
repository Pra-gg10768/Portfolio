import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Radar, Route, ScanFace, ShieldCheck, Sprout } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const chapters = [
  {
    label: 'Origin',
    title: 'A try-on app made perception feel tangible.',
    text: 'Facial geometry was the first hook: a camera, a face, and software that understood enough structure to feel intelligent.',
    icon: ScanFace,
  },
  {
    label: 'Constraint',
    title: 'A farmer platform exposed the limit of rules.',
    text: 'Market prices and crop recommendations worked, but visual crop health needed a model that could actually inspect the world.',
    icon: Sprout,
  },
  {
    label: 'Research',
    title: 'The projects started orbiting trust.',
    text: 'Deepfakes, intrusion traffic, and crowded scenes all ask whether a model is learning the phenomenon or a convenient shortcut.',
    icon: ShieldCheck,
  },
  {
    label: 'Delivery',
    title: 'Telemetry made the work more physical.',
    text: 'GPS and OBD-II traces moved the work into pipelines, visual debugging, and interfaces for messy real signals.',
    icon: Route,
  },
];

const radarSignals = [
  { label: 'Question', detail: 'What is the real signal?' },
  { label: 'Extract', detail: 'Turn raw inputs into traces.' },
  { label: 'Stress test', detail: 'Check what breaks off-domain.' },
  { label: 'Explain', detail: 'Make the decision inspectable.' },
  { label: 'Ship', detail: 'Wrap it in a usable surface.' },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const sweep = useTransform(scrollYProgress, [0, 1], ['0deg', '360deg']);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.9, 0.55]);

  return (
    <section id="about" ref={ref} className="about-polished-section">
      <div className="about-polished-sticky">
        <motion.div
          className="about-radar-panel"
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="about-radar" aria-hidden="true">
            <motion.span className="about-radar-sweep" style={{ rotate: sweep, opacity: glow }} />
            <Radar size={38} />
            {radarSignals.map((signal, index) => (
              <div key={signal.label} className={`about-radar-chip about-radar-chip-${index + 1}`}>
                <strong>{signal.label}</strong>
                <span>{signal.detail}</span>
              </div>
            ))}
          </div>
          <div className="about-radar-caption">
            <span className="label">Working loop</span>
            <strong>Question the shortcut, extract the signal, then make the result inspectable.</strong>
          </div>
        </motion.div>

        <div className="about-story-column">
          <span className="label">About me</span>
          <h2 className="display">I care less about the model name than the signal it is allowed to trust.</h2>
          <p>
            My work sits between computer vision, security, and applied ML. The common thread is evaluation:
            if a system works only because of artifacts, dataset quirks, or clean inputs, it is not done yet.
          </p>
          <a className="about-github-link" href="https://github.com/Pra-gg10768" target="_blank" rel="noreferrer">
            <Github size={17} />
            @Pra-gg10768
          </a>

          <div className="about-story-list">
            {chapters.map((chapter, index) => (
              <StoryRow key={chapter.label} chapter={chapter} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryRow({ chapter, index, progress }) {
  const start = 0.12 + index * 0.16;
  const opacity = useTransform(progress, [start - 0.08, start + 0.04, start + 0.24], [0.38, 1, 0.72]);
  const x = useTransform(progress, [start - 0.08, start + 0.04], [28, 0]);
  const Icon = chapter.icon;

  return (
    <motion.article className="about-story-row" style={{ opacity, x }}>
      <div className="about-story-row-icon">
        <Icon size={17} />
      </div>
      <div>
        <span>{chapter.label}</span>
        <h3>{chapter.title}</h3>
        <p>{chapter.text}</p>
      </div>
    </motion.article>
  );
}
