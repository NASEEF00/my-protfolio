import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Developer',
      company: 'assistents.ai',
      period: '2024 - Present',
      description: 'Developing autonomous AI agents and integrating LLMs into automated workflows. Optimizing prompt engineering and building scalable backend systems for AI-driven applications.',
      color: '#00E5FF',
      tags: ['LLMs', 'Python', 'AI Agents', 'Automation']
    },
    {
      role: 'Flutter Developer',
      company: 'Ampcome Technologies',
      period: '2023 - 2024',
      description: 'Led the development of high-performance mobile applications using Flutter. Focused on state management, CI/CD pipelines, and delivering pixel-perfect UI/UX across iOS and Android.',
      color: '#B28CFF',
      tags: ['Flutter', 'Dart', 'Firebase', 'State Management']
    },
    {
      role: 'Flutter Developer (Freelance)',
      company: 'Self-Employed',
      period: '2022 - 2023',
      description: 'Successfully delivered custom mobile solutions to international clients. Managed end-to-end development cycles from requirement gathering to App Store and Play Store deployments.',
      color: '#FF66A3',
      tags: ['Flutter', 'Client Management', 'Mobile Architecture']
    }
  ];

  return (
    <section id="experience" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div 
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '-0.02em', color: '#FFF' }}>
            Professional Experience
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '0.95rem', maxWidth: '600px' }}>
            A journey through mobile mastery and the evolution into synthetic intelligence.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: 'relative' }} className="timeline-wrapper">
          
          {/* Vertical Line */}
          <motion.div 
            className="timeline-line" 
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #00E5FF, #B28CFF, #FF66A3)',
              opacity: 0.8
            }}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`timeline-item ${isLeft ? 'left' : 'right'}`} style={{ 
                  display: 'flex', 
                  position: 'relative',
                  width: '100%'
                }}>
                  
                  {/* Glowing Dot */}
                  <motion.div 
                    className="timeline-dot" 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#13141C',
                      border: `3px solid ${exp.color}`,
                      boxShadow: `0 0 12px ${exp.color}`,
                      zIndex: 2
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.5, boxShadow: `0 0 20px ${exp.color}` }}
                  ></motion.div>

                  {/* Experience Card */}
                  <motion.div 
                    className="experience-card" 
                    style={{
                      background: '#181A22',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'left'
                    }}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ 
                      y: -5, 
                      borderColor: exp.color + '44',
                      boxShadow: `0 10px 30px ${exp.color}11`
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: exp.color, marginBottom: '0.5rem', background: `rgba(${exp.color === '#00E5FF' ? '0,229,255' : exp.color === '#B28CFF' ? '178,140,255' : '255,102,163'}, 0.1)`, display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '40px' }}>
                      {exp.period}
                    </div>
                    
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFF', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1rem', fontWeight: '500' }}>{exp.company}</div>
                    
                    <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{exp.description}</p>
                    
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {exp.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.7rem', color: '#A1A5B7', background: '#21242E', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: '600' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
          
        </div>

      </div>
      <style>{`
        .timeline-line { left: 0; }
        .timeline-dot { left: 0; transform: translate(-50%, -50%); }
        .experience-card { margin-left: 2rem; width: calc(100% - 2rem); }
        
        @media(min-width: 768px) {
          .timeline-line { left: 50% !important; transform: translateX(-50%); }
          .timeline-item.left { justify-content: flex-start; }
          .timeline-item.right { justify-content: flex-end; }
          .timeline-dot { left: 50% !important; }
          .experience-card { width: calc(50% - 3rem) !important; margin-left: 0; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
