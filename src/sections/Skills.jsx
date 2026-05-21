import { motion } from 'framer-motion';
import { FadeIn } from '../components/Motion';

const skillGroups = [
  {
    category: 'ML / DL / GenAI',
    color: '#c8f064',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'YOLO', 'Transformers', 'OpenCV'],
  },
  {
    category: 'Languages & Dev',
    color: '#64c8f0',
    skills: ['Python', 'Java', 'Flask', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Data & Tools',
    color: '#f0c864',
    skills: ['Pandas', 'NumPy', 'Mapbox', 'Deck.gl', 'Git', 'LaTeX'],
  },
  {
    category: 'Embedded & Cyber',
    color: '#f064c8',
    skills: ['Raspberry Pi', 'Arduino', 'Fortinet NSE', 'Network Intrusion Detection'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ padding: '112px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <div style={{ width: 32, height: 1, background: 'var(--accent)' }} />
            <span className="label">Toolkit</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 72px)', maxWidth: 760, marginBottom: 34 }}>
            Tools I use when the work gets real.
          </h2>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))', gap: 16 }}>
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.07}>
              <div
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: 26,
                  background: 'var(--skiper-surface)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: gi * 0.08 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: group.color,
                    transformOrigin: '0% 50%',
                    opacity: 0.85,
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: group.color }} />
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)' }}>{group.category}</h3>
                </div>

                <div style={{ display: 'grid', gap: 12 }}>
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.06 + si * 0.035, duration: 0.35 }}
                      style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                    >
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: group.color, opacity: 0.85 }} />
                      <span style={{ fontSize: 14, color: 'var(--muted)' }}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
