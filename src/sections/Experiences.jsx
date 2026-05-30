import React from 'react';
import Section from '../components/Section';
import { RevealText } from '../components/RevealText';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Innovators',
    period: '2021 - Present',
    description: 'Led the frontend architecture for a high-traffic e-commerce platform. Improved Core Web Vitals by 40% and mentored junior developers.'
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2018 - 2021',
    description: 'Developed interactive and engaging web applications for various clients. Specialized in smooth animations and pixel-perfect implementations.'
  },
  {
    role: 'Web Developer',
    company: 'Startup Hub',
    period: '2016 - 2018',
    description: 'Built MVPs for early-stage startups using React and Node.js. Focused on rapid iteration and responsive design.'
  }
];

const Experiences = () => {
  return (
    <Section id="experiences" title="Experiences">
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{exp.role}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>{exp.company}</span>
              <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>{exp.period}</span>
            </div>
            <RevealText text={exp.description} style={{ opacity: 0.9 }} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
