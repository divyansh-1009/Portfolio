import { motion } from 'framer-motion';

export const RevealText = ({ text, delay = 0, style = {}, className = "" }) => {
  return (
    <motion.p
      className={className}
      style={style}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.p>
  );
};

export const RevealHeading = ({ text, delay = 0, style = {}, className = "" }) => {
  const characters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, 
        delayChildren: delay 
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  return (
    <motion.h2
      className={className}
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', ...style }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label={text}
    >
      <span aria-hidden="true" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: style.justifyContent || 'center', width: '100%' }}>
        {characters.map((char, index) => (
          <motion.span
            variants={child}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.h2>
  );
};
