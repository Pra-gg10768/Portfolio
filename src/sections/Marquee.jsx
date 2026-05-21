const items = [
  'Python', 'PyTorch', 'TensorFlow', 'YOLO', 'Transformers',
  'OpenCV', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy',
  'Mapbox', 'Deck.gl', 'MongoDB', 'MySQL', 'Git',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '32px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--card-bg)',
      }}
    >
      <div className="ticker-track" style={{ display: 'flex', gap: 48, width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 48, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--muted)',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--accent)', fontSize: 20 }}>*</span>
          </div>
        ))}
      </div>
    </div>
  );
}
