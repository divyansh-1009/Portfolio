import React from 'react';
import Section from '../components/Section';
import { RevealText } from '../components/RevealText';

const Interests = () => {
  return (
    <Section id="interests" title="Interests">
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <RevealText 
          text="When I'm not writing code, I'm constantly exploring the intersection of design and technology. I have a deep appreciation for typography, minimalist architecture, and generative art." 
          style={{ fontSize: '1.1rem', color: 'rgba(255, 239, 179, 0.9)', marginBottom: '1.5rem', textAlign: 'center' }}
        />
        <RevealText 
          text="I also enjoy reading sci-fi literature, discovering new coffee blends, and experimenting with hardware projects. I believe having diverse interests fuels creativity and brings fresh perspectives to frontend development." 
          delay={0.4}
          style={{ fontSize: '1.1rem', color: 'rgba(255, 239, 179, 0.9)', textAlign: 'center' }}
        />
      </div>
    </Section>
  );
};

export default Interests;
