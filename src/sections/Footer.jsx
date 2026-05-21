import AnimatedLink from '../components/v1/AnimatedLink';

export default function Footer() {
  return (
    <footer style={{
      padding: '32px 40px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 800,
        color: 'var(--fg)',
        letterSpacing: '-0.04em',
      }}>
        Pragg<span style={{ color: 'var(--accent)' }}>.</span>
      </span>

      <p style={{ fontSize: 13, color: 'var(--muted)' }}>
        Designed & built by Pragg - {new Date().getFullYear()}
      </p>

      <AnimatedLink href="#contact" variant="underline" style={{ fontSize: 12, color: 'var(--muted)' }}>
        Start a conversation
      </AnimatedLink>
    </footer>
  );
}
