import React from 'react';
import Section from '../components/Section';
import { RevealText, RevealHeading } from '../components/RevealText';

const Contact = () => {
  return (
    <Section id="contact">
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <RevealHeading text="Let's work together." style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: 'var(--color-text)', display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }} />
        <RevealText 
          text="Feel free to reach out if you have a question, or just want to connect." 
          style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem', textAlign: 'center' }}
          delay={0.6}
        />
        <a 
          href="mailto:hello@example.com" 
          style={{
            display: 'inline-block',
            fontSize: '2rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            borderBottom: '2px solid var(--color-accent)',
            paddingBottom: '0.5rem',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--color-accent)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--color-text)';
            e.currentTarget.style.borderColor = 'var(--color-accent)';
          }}
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;
