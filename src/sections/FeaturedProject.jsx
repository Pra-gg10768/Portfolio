import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BarChart3, GitBranch, Play, ScanFace, ShieldCheck, Waves } from 'lucide-react';
import MagButton from '../components/MagButton';

const EASE = [0.16, 1, 0.3, 1];

const deck = [
  {
    kicker: '01 / Signal premise',
    title: 'A real face has a pulse signature.',
    copy: 'The detector compares rPPG traces across facial regions. Real videos tend to keep those signals stable and spatially coherent; manipulated videos drift, jitter, and desynchronize.',
  },
  {
    kicker: '02 / Method spine',
    title: 'The pipeline stays interpretable.',
    copy: 'Video becomes FaceMesh regions, regions become RGB traces, traces become physiological features, and classical ML models make the final call.',
  },
  {
    kicker: '03 / Evidence',
    title: 'The result is measured, not claimed.',
    copy: 'The strongest model reached 0.955 ROC-AUC on the training set, then moved to DFD testing without fine-tuning to check generalization.',
  },
];

const pipeline = ['Raw video', 'FaceMesh', 'ROI RGB', '68 features', 'SVM / XGBoost', 'DFD test'];

const metrics = [
  ['Logistic', '0.789', '0.830'],
  ['SVM-RBF', '0.927', '0.952'],
  ['XGBoost', '0.936', '0.955'],
];

const proof = [
  { label: 'Feature vector', value: '68', icon: BarChart3 },
  { label: 'Strongest ROI', value: 'Cheeks', icon: ScanFace },
  { label: 'Transfer test', value: 'Celeb-DF -> DFD', icon: GitBranch },
];

export default function FeaturedProject() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progressWidth = useTransform(scrollYProgress, [0.08, 0.92], ['0%', '100%']);
  const headlineY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="featured" ref={ref} className="featured-deck-section">
      <div className="featured-deck-sticky">
        <motion.div className="featured-deck-intro" style={{ y: headlineY }}>
          <span className="label">Featured research</span>
          <h2 className="display">Physio-aware deepfake detection.</h2>
          <p>
            A case study in using physiology as evidence: extract rPPG from multiple facial regions,
            model their coherence, and test whether the signal survives across datasets.
          </p>
          <div className="featured-actions">
            <MagButton href="https://github.com/Pra-gg10768" variant="primary">
              View GitHub <ArrowUpRight size={16} />
            </MagButton>
            <MagButton href="#work" variant="outline">
              More projects
            </MagButton>
          </div>

          <div className="featured-deck-progress" aria-hidden="true">
            <motion.span style={{ width: progressWidth }} />
          </div>
        </motion.div>

        <div className="featured-deck-stage">
          <DeckPanel index={0} progress={scrollYProgress}>
            <PanelHeader item={deck[0]} icon={Waves} />
            <SignalComparison progress={scrollYProgress} />
          </DeckPanel>

          <DeckPanel index={1} progress={scrollYProgress}>
            <PanelHeader item={deck[1]} icon={ShieldCheck} />
            <Pipeline />
          </DeckPanel>

          <DeckPanel index={2} progress={scrollYProgress}>
            <PanelHeader item={deck[2]} icon={BarChart3} />
            <Evidence />
          </DeckPanel>
        </div>
      </div>
    </section>
  );
}

function DeckPanel({ index, progress, children }) {
  const start = index * 0.27;
  const mid = start + 0.17;
  const end = start + 0.34;
  const y = useTransform(progress, [start, mid, end], [90, 0, -70]);
  const scale = useTransform(progress, [start, mid, end], [0.94, 1, 0.96]);
  const opacity = useTransform(progress, [start, mid, end], [0, 1, index === 2 ? 1 : 0.18]);
  const rotate = useTransform(progress, [start, mid, end], [index % 2 ? 2 : -2, 0, index % 2 ? -1 : 1]);

  return (
    <motion.article
      className={`featured-deck-panel featured-deck-panel-${index + 1}`}
      style={{ y, scale, opacity, rotate }}
    >
      {children}
    </motion.article>
  );
}

function PanelHeader({ item, icon: Icon }) {
  return (
    <div className="featured-panel-header">
      <div>
        <span>{item.kicker}</span>
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </div>
      <Icon size={24} />
    </div>
  );
}

function SignalComparison({ progress }) {
  const real = useTransform(progress, [0.08, 0.34], [0, 1]);
  const fake = useTransform(progress, [0.18, 0.42], [0, 1]);

  return (
    <div className="featured-signal-compare">
      <div className="featured-signal-tabs">
        <span>real video</span>
        <span>manipulated video</span>
      </div>
      <svg viewBox="0 0 820 260" preserveAspectRatio="none" aria-hidden="true">
        <path className="featured-signal-axis" d="M0 132 H820" />
        <path className="featured-signal-shadow" d="M0 114 C70 62 130 164 204 104 S330 58 426 118 S624 164 820 74" />
        <motion.path
          className="featured-signal-real"
          d="M0 114 C70 62 130 164 204 104 S330 58 426 118 S624 164 820 74"
          style={{ pathLength: real }}
        />
        <path className="featured-signal-noise" d="M0 184 C44 74 126 218 184 142 S292 198 364 74 S518 220 612 118 S738 178 820 104" />
        <motion.path
          className="featured-signal-fake"
          d="M0 184 C44 74 126 218 184 142 S292 198 364 74 S518 220 612 118 S738 178 820 104"
          style={{ pathLength: fake }}
        />
      </svg>
      <div className="featured-signal-note">
        <strong>Key idea</strong>
        <span>Appearance can be copied. Physiological timing across regions is harder to keep coherent.</span>
      </div>
    </div>
  );
}

function Pipeline() {
  return (
    <div className="featured-pipeline-spine">
      {pipeline.map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE, delay: index * 0.06 }}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
          {index < pipeline.length - 1 && <em />}
        </motion.div>
      ))}
    </div>
  );
}

function Evidence() {
  return (
    <div className="featured-evidence-layout">
      <div className="featured-proof-grid">
        {proof.map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <Icon size={18} />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="featured-results-table-clean">
        <div className="featured-results-clean-head">
          <span>Model</span>
          <span>Accuracy</span>
          <span>ROC-AUC</span>
        </div>
        {metrics.map(([model, acc, auc]) => (
          <div key={model}>
            <strong>{model}</strong>
            <span>{acc}</span>
            <span>{auc}</span>
          </div>
        ))}
      </div>

      <div className="featured-cross-note">
        <Play size={16} />
        Cross-dataset check: trained on Celeb-DF, tested on DFD without fine-tuning.
      </div>
    </div>
  );
}
