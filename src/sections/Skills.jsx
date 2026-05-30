import React from 'react';
import Section from '../components/Section';

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 
  'CSS Architecture', 'Framer Motion', 'Performance Optimization', 
  'Web Accessibility', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Git'
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <div 
            key={index}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 239, 179, 0.2)',
              background: 'rgba(255, 239, 179, 0.05)',
              backdropFilter: 'blur(10px)',
              fontSize: '1rem',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.background = 'rgba(255, 239, 179, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 239, 179, 0.2)';
              e.currentTarget.style.background = 'rgba(255, 239, 179, 0.05)';
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
