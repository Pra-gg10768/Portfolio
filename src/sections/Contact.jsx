import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { RevealText, FadeIn } from '../components/Motion';
import MagButton from '../components/MagButton';

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
];

const fitSignals = [
  'AI/ML engineering roles',
  'Computer vision and trustworthy AI research',
  'Freelance builds with data, dashboards, or ML systems',
];

export default function Contact() {
  return (
    <section id="contact" className="contact-redesign">
      <div className="contact-shell">
        <div className="contact-copy">
          <FadeIn>
            <div className="contact-label-row">
              <span />
              <span className="label">Contact</span>
            </div>
          </FadeIn>

          <h2 className="display contact-title">
            <RevealText>Tell me what</RevealText>
            <RevealText delay={0.08}>
              <span className="grad-text">needs to be built</span>
            </RevealText>
            <RevealText delay={0.16}>or tested.</RevealText>
          </h2>

          <FadeIn delay={0.24}>
            <p className="contact-intro">
              I am most useful where ML has to survive real inputs: visual signals, security data,
              telemetry, evaluation gaps, and interfaces that make the model inspectable.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="contact-fit-list">
              {fitSignals.map((signal) => (
                <span key={signal}>
                  <ShieldCheck size={15} />
                  {signal}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.36}>
            <div className="contact-actions">
              <MagButton href="mailto:pragnyansatapathy@gmail.com" variant="primary">
                <Mail size={16} />
                Email me
              </MagButton>
              <MagButton href="https://www.linkedin.com/in/pragnyan/" variant="outline">
                <Linkedin size={16} />
                LinkedIn
              </MagButton>
            </div>
          </FadeIn>
        </div>

        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="contact-panel-top">
            <div>
              <span className="label">Start here</span>
              <strong>pragnyansatapathy@gmail.com</strong>
            </div>
            <a href="mailto:pragnyansatapathy@gmail.com" aria-label="Email Pragnyan">
              <ArrowUpRight size={19} />
            </a>
          </div>

          <form id="contact-form" className="contact-form" action="mailto:pragnyansatapathy@gmail.com" method="post" encType="text/plain">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label className="contact-form-message">
              <span>Message</span>
              <textarea name="message" rows="5" placeholder="A short note about the role, project, or research idea." />
            </label>
            <button type="submit">
              Send note <Send size={15} />
            </button>
          </form>

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
                transition={{ duration: 0.42, ease: EASE, delay: 0.18 + index * 0.08 }}
                whileHover={{ x: 6 }}
              >
                <Icon size={18} />
                <span>{label}</span>
                <strong>{handle}</strong>
                <ArrowUpRight size={16} />
              </motion.a>
            ))}
          </div>

          <div className="contact-panel-footer">
            <span><MapPin size={15} /> India</span>
            <span><Sparkles size={15} /> Open to roles and research</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
