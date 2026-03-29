import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const coreTechs = [
    {
      name: 'Flutter',
      level: 'Advanced',
      proficiency: 85,
      color: '#00E5FF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 12l10 10 10-10L12 2z"></path>
          <path d="M2 12l10-10"></path>
          <path d="M12 22l10-10"></path>
        </svg>
      )
    },
    {
      name: 'Python',
      level: 'Expert',
      proficiency: 95,
      color: '#B28CFF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B28CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10h12a4 4 0 0 1 4 4v6"></path>
          <path d="M20 10V6a4 4 0 0 0-4-4H4"></path>
          <rect x="8" y="14" width="8" height="8" rx="2"></rect>
          <circle cx="12" cy="18" r="1"></circle>
        </svg>
      )
    },
    {
      name: 'Supabase',
      level: 'Advanced',
      proficiency: 80,
      color: '#FF66A3',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF66A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div 
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1C1E26', border: '1px solid rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '50px', marginBottom: '1rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B28CFF', boxShadow: '0 0 8px #B28CFF' }}></div>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', color: '#9CA3AF' }}>STACK & JOURNEY</span>
          </div>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #FFFFFF, #B28CFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Architecting Synthetic<br/>Intelligence.
          </h2>
          
          <p style={{ color: '#D1D5DB', fontSize: '0.95rem', maxWidth: '600px', lineHeight: '1.6' }}>
            Expertise focused on high-performance cross-platform mobile ecosystems and scalable AI-driven backends, bridging the gap between front-end fluidity and back-end logic.
          </p>
        </motion.div>

        {/* Core Technologies Grid */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Core Technologies</h3>
        <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '2rem' }}>The engine room of my development workflow.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {coreTechs.map((tech, idx) => (
            <motion.div 
              key={tech.name} 
              style={{ background: '#181A22', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "#1C1E26",
                borderColor: tech.color + "66",
                boxShadow: `0 15px 35px ${tech.color}1a`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <motion.div 
                  style={{ background: '#21242E', padding: '0.5rem', borderRadius: '8px' }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {tech.icon}
                </motion.div>
                <div style={{ fontSize: '0.7rem', fontWeight: '700', color: tech.color, padding: '0.2rem 0.6rem', background: `rgba(${tech.color === '#00E5FF' ? '0,229,255' : tech.color === '#B28CFF' ? '178,140,255' : '255,102,163'}, 0.1)`, borderRadius: '40px' }}>
                  {tech.level}
                </div>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.2rem' }}>{tech.name}</h4>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#6B7280', marginBottom: '0.5rem' }}>
                  <span>Proficiency</span>
                  <span>{tech.proficiency}%</span>
                </div>
                
                <div style={{ background: '#2A2D39', height: '4px', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
                  <motion.div 
                    style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: tech.color, borderRadius: '2px', boxShadow: `0 0 10px ${tech.color}` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extended Toolkit */}
        <motion.div 
          style={{ background: '#181A22', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#9CA3AF' }}>Extended Toolkit:</span>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['Dart', 'GraphQL', 'Prisma', 'React', 'Node.js'].map((tech, idx) => (
              <motion.span 
                key={tech} 
                style={{ fontSize: '0.8rem', fontWeight: '600', padding: '0.3rem 0.8rem', background: '#21242E', borderRadius: '50px', color: '#D1D5DB' }}
                whileHover={{ scale: 1.1, backgroundColor: "#2A2D39", color: "#FFF" }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
