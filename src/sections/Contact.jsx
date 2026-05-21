import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { RevealText, FadeIn } from '../components/Motion';
import MagButton from '../components/MagButton';
import AnimatedLink from '../components/v1/AnimatedLink';

const EASE = [0.16, 1, 0.3, 1];

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@Pra-gg10768',
    href: 'https://github.com/Pra-gg10768',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Pragnyan Satapathy',
    href: 'https://www.linkedin.com/in/pragnyan/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@pra.gg10768',
    href: 'https://www.instagram.com/praag._.yaan/',
  },
];

const contactSignals = [
  { label: 'Role fit', value: 'AI/ML engineering' },
  { label: 'Project fit', value: 'vision, security, data' },
  { label: 'Response rhythm', value: 'usually within a day' },
];

const routeNodes = [
  { label: 'idea', x: 16, y: 24 },
  { label: 'scope', x: 43, y: 58 },
  { label: 'build', x: 76, y: 33 },
];

export default function Contact() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 130, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 130, damping: 24 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="contact" className="contact-redesign">
      <div className="contact-grid-bg" aria-hidden="true" />

      <div className="contact-shell">
        <div className="contact-copy">
          <FadeIn>
            <div className="contact-label-row">
              <span />
              <span className="label">Get in touch</span>
            </div>
          </FadeIn>

          <h2 className="display contact-title">
            <RevealText>Have a build,</RevealText>
            <RevealText delay={0.08}>
              <span className="grad-text">research idea,</span>
            </RevealText>
            <RevealText delay={0.16}>or role in mind?</RevealText>
          </h2>

          <FadeIn delay={0.24}>
            <p className="contact-intro">
              I am open to AI/ML engineering roles, research collaborations, and selective freelance
              work where computer vision, security, telemetry, or applied ML has to move from idea to
              working product.
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="contact-actions">
              <MagButton href="mailto:pragnyansatapathy@gmail.com" variant="primary">
                <Mail size={16} />
                Email me
              </MagButton>
              <MagButton href="https://www.linkedin.com/in/pragnyan/" variant="outline">
                <Linkedin size={16} />
                Connect
              </MagButton>
            </div>
          </FadeIn>
        </div>

        <motion.div
          className="contact-console-wrap"
          style={{ rotateX, rotateY }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
        >
          <div className="contact-routing-board">
            <div className="contact-board-header">
              <span className="label">Contact route</span>
              <div className="contact-online">
                <span />
                Available
              </div>
            </div>

            <div className="contact-route-stage" aria-hidden="true">
              <svg viewBox="0 0 100 70" preserveAspectRatio="none">
                <motion.path
                  d="M 16 24 C 30 10 34 60 43 58 S 66 20 76 33"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
                />
              </svg>
              {routeNodes.map((node, index) => (
                <motion.span
                  key={node.label}
                  className="contact-route-node"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.3 + index * 0.15 }}
                >
                  {node.label}
                </motion.span>
              ))}
            </div>

            <a className="contact-inbox-strip" href="mailto:pragnyansatapathy@gmail.com">
              <Mail size={20} />
              <span>pragnyansatapathy@gmail.com</span>
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-board-body">
              <div className="contact-signal-list">
                {contactSignals.map((signal, index) => (
                  <motion.div
                    key={signal.label}
                    className="contact-signal-row"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.28 + index * 0.08 }}
                  >
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </motion.div>
                ))}
              </div>

              <div className="contact-social-rail">
                {socials.map(({ icon: Icon, label, handle, href }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, ease: EASE, delay: 0.38 + index * 0.08 }}
                    whileHover={{ x: 8 }}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                    <strong>{handle}</strong>
                    <ArrowUpRight size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="contact-console-footer">
              <span><MapPin size={16} /> India</span>
              <span><Sparkles size={16} /> AI systems</span>
              <span><MessageCircle size={16} /> Open to talk</span>
            </div>
          </div>
        </motion.div>
      </div>

      <FadeIn delay={0.46}>
        <div className="contact-bottom-link">
          <AnimatedLink href="mailto:pragnyansatapathy@gmail.com" variant="underline">
            Start with a short note
          </AnimatedLink>
        </div>
      </FadeIn>
    </section>
  );
}
