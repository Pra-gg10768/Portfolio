export const colors = {
  bg: 'hsl(220, 12%, 6%)',
  fg: 'hsl(0, 0%, 95%)',
  accentStart: 'hsl(210, 80%, 55%)',
  accentEnd: 'hsl(260, 80%, 55%)',
  muted: 'hsl(0, 0%, 45%)',
  border: 'rgba(255,255,255,0.12)',
  glass: 'rgba(255,255,255,0.07)'
};

export const glassStyle = `
  background: ${colors.glass};
  backdrop-filter: blur(12px);
  border: 1px solid ${colors.border};
  border-radius: 12px;
`;

export const fontFamily = {
  display: "'Inter', system-ui, sans-serif",
  body: "'Inter', system-ui, sans-serif"
};
