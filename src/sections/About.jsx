import React from 'react';
import Section from '../components/Section';
import { RevealText } from '../components/RevealText';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        <RevealText 
          text="Hello! I'm a Senior Frontend Developer with a passion for creating beautiful, performant, and accessible web applications. I believe in minimalism, where less is more, and every element serves a distinct purpose." 
          style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'rgba(255, 239, 179, 0.9)' }}
        />
        <RevealText 
          text="Over the years, I've honed my skills in React, modern JavaScript, and CSS architecture, allowing me to translate complex requirements into seamless user experiences. My approach blends elegant aesthetics with solid engineering principles." 
          delay={0.4}
          style={{ fontSize: '1.1rem', color: 'rgba(255, 239, 179, 0.9)' }}
        />
      </div>
    </Section>
  );
};

export default About;
