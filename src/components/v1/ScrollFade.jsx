export default function ScrollFade({ children, className = '', style, as: Tag = 'div' }) {
  return (
    <Tag className={`scroll-fade-y ${className}`} style={style}>
      {children}
    </Tag>
  );
}
