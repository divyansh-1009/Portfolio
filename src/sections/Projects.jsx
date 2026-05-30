import Section from '../components/Section';
import { RevealText } from '../components/RevealText';

const projects = [
  {
    title: 'Old Portfolio',
    status: 'Live',
    description: 'A legacy portfolio showcasing early career work and foundational skills.',
  },
  {
    title: 'E-commerce Store',
    status: 'Live',
    description: 'A fully functional store frontend with cart management and product filtering.',
  },
  {
    title: 'Portmyfolio',
    status: 'Coming Soon',
    description: 'A platform to help developers generate portfolios instantly.',
  },
  {
    title: 'Task Flow',
    status: 'Coming Soon',
    description: 'An elegant task management application focusing on minimal UI.',
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 style={{ fontSize: '1.25rem' }}>{project.title}</h3>
              <span style={{ 
                fontSize: '0.75rem', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '9999px',
                background: project.status === 'Live' ? 'rgba(255, 239, 179, 0.15)' : 'rgba(255, 239, 179, 0.05)',
                border: project.status === 'Live' ? '1px solid var(--color-accent)' : '1px solid rgba(255, 239, 179, 0.2)'
              }}>
                {project.status}
              </span>
            </div>
            <RevealText text={project.description} style={{ opacity: 0.8, fontSize: '0.95rem', flex: 1 }} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
