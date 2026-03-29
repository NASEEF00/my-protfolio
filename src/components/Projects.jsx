import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Voice Bot',
      description: 'Real-time low-latency voice synthesis engine capable of handling complex conversational branches with sub-100ms response times.',
      status: 'LIVE PROJECT',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="22"></line>
        </svg>
      ),
      tags: ['Flutter', 'Supabase', 'OpenAI']
    },
    {
      title: 'Cross-Platform Chat App',
      description: 'Next-gen messaging architecture utilizing GraphQL subscriptions for instantaneous state synchronization across all mobile platforms.',
      status: 'UNDER REVIEW',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B28CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      tags: ['Dart', 'Firebase', 'GraphQL']
    },
    {
      title: 'Neural Mesh Protocol',
      description: 'A decentralized orchestration layer for LLM agents to communicate and execute multi-step logic flows autonomously.',
      status: 'LIVE PROJECT',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF66A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <line x1="12" y1="2" x2="12" y2="10"></line>
          <line x1="12" y1="14" x2="12" y2="22"></line>
          <line x1="22" y1="12" x2="14" y2="12"></line>
          <line x1="10" y1="12" x2="2" y2="12"></line>
        </svg>
      ),
      tags: ['Python', 'FastAPI', 'LangChain']
    },
    {
      title: 'Ether Visualizer',
      description: 'Interactive 3D dashboard for monitoring real-time data throughput across serverless cloud functions.',
      status: 'CONCEPTUAL',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      tags: ['React', 'Three.js', 'WebSockets']
    }
  ];

  return (
    <section id="projects" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF66A3', boxShadow: '0 0 8px #FF66A3' }}></div>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', color: '#FF66A3' }}>SYSTEM STATUS: ACTIVE INTELLIGENCE</span>
          </div>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem', letterSpacing: '-0.02em', color: '#FFF' }}>
            Architecting the <br/>
            <span style={{ background: 'linear-gradient(90deg, #FFFFFF, #B28CFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Synthetic Ether
            </span>
          </h2>
          
          <p style={{ color: '#D1D5DB', fontSize: '0.95rem', maxWidth: '600px', lineHeight: '1.6' }}>
            A selection of high-performance deployments, focused on autonomous AI agents, distributed systems, and fluid user interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map(project => (
            <div key={project.title} style={{ 
              background: '#181A22', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: '16px', 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px'
            }}>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#21242E', padding: '0.75rem', borderRadius: '12px' }}>
                    {project.icon}
                  </div>
                  <div style={{ 
                    fontSize: '0.65rem', 
                    fontWeight: '700', 
                    color: '#00E5FF', 
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(0, 229, 255, 0.05)', 
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                    borderRadius: '50px',
                    letterSpacing: '0.05em'
                  }}>
                    + {project.status}
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFF', marginBottom: '0.75rem' }}>
                  {project.title}
                </h3>
                
                <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', color: '#A1A5B7', background: '#21242E', padding: '0.2rem 0.75rem', borderRadius: '50px', fontWeight: '600' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <a href="#" style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: '700', 
                  color: '#00E5FF', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem' 
                }}>
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
