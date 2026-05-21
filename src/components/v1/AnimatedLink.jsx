import { ArrowUpRight } from 'lucide-react';

const variants = {
  underline: 'skiper-link-underline',
  fill: 'skiper-link-fill',
  icon: 'skiper-link-icon',
};

export default function AnimatedLink({
  href,
  children,
  variant = 'underline',
  className = '',
  external = false,
  ...props
}) {
  const rel = external ? 'noreferrer' : props.rel;
  const target = external ? '_blank' : props.target;
  const classes = ['skiper-link', variants[variant] || variants.underline, className].filter(Boolean).join(' ');

  return (
    <a href={href} className={classes} target={target} rel={rel} {...props}>
      <span className="skiper-link-text">{children}</span>
      {variant === 'icon' && <ArrowUpRight className="skiper-link-arrow" size={15} aria-hidden="true" />}
    </a>
  );
}
