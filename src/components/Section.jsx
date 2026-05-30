import { motion } from 'framer-motion';
import { RevealHeading } from './RevealText';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`container ${className}`}
      style={{ padding: '6rem 2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {title && (
          <RevealHeading 
            text={title} 
            style={{ color: 'var(--color-text)', marginBottom: '3rem', textAlign: 'center' }} 
          />
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
