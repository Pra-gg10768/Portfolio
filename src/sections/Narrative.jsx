import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chapters = [
  {
    year: '2021',
    title: 'Curiosity became a technical path',
    text: 'A visual try-on feature made me wonder how software understands faces and geometry. That question pulled me toward algorithms, machine learning, and systems that interpret the real world.',
  },
  {
    year: '2023',
    title: 'Product thinking entered the work',
    text: 'Building a farmer-facing platform showed me the limits of rule-based systems. Crop recommendations were useful, but visual crop health and changing conditions needed smarter models.',
  },
  {
    year: '2024',
    title: 'Vision and security converged',
    text: 'Network intrusion detection, rPPG-based deepfake detection, and YOLO queue monitoring pushed my work toward trustworthy AI: models that can detect, explain, and be evaluated honestly.',
  },
  {
    year: '2025',
    title: 'Research meets delivery',
    text: 'Vehicle telemetry visualization, freelance-style delivery, and independent AI work sharpened my profile around visual signals, ML security, applied systems, and practical evaluation.',
  },
];

export default function Narrative() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const lineScale = useTransform(scrollYProgress, [0.08, 0.9], [0, 1]);

  return (
    <section ref={ref} id="journey" className="narrative-scroll-section">
      <div className="narrative-sticky">
        <div className="narrative-intro">
          <span className="label">Journey</span>
          <h2 className="display">The path is not a resume. It is curiosity becoming systems.</h2>
        </div>

        <div className="narrative-timeline">
          <div className="narrative-line">
            <motion.span style={{ scaleY: lineScale }} />
          </div>
          {chapters.map((chapter, index) => (
            <Chapter key={chapter.year} chapter={chapter} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Chapter({ chapter, index, progress }) {
  const start = 0.1 + index * 0.2;
  const opacity = useTransform(progress, [start - 0.08, start, start + 0.14], [0.32, 1, 0.78]);
  const x = useTransform(progress, [start - 0.08, start], [index % 2 ? 40 : -40, 0]);
  const scale = useTransform(progress, [start - 0.08, start], [0.96, 1]);

  return (
    <motion.article className="narrative-chapter" style={{ opacity, x, scale }}>
      <div className="narrative-node" />
      <span>{chapter.year}</span>
      <h3>{chapter.title}</h3>
      <p>{chapter.text}</p>
    </motion.article>
  );
}
