import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '6rem' }}>
      
      {/* Floating Connect Sidebar */}
      <div className="connect-sidebar">
        <div className="connect-text">CONNECT</div>
        {/* ... symbols ... */}
        <div className="connect-icon" title="Code">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div className="connect-icon active" title="Community">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div className="connect-icon" title="Share">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="grid-2-col">
          
          {/* Left Column Content */}
          <div style={{ paddingRight: '1rem' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Hi, I'm <span className="text-gradient">Mohammed Naseef</span>, <br />
              AI & Mobile Dev
            </h1>
            
            <p style={{ color: '#D1D5DB', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: '1.7' }}>
              Crafting intelligent digital experiences with 3+ years of expertise in
              high-performance mobile architectures, autonomous AI agents, and
              conversational voice bots.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <button style={{
                position: 'relative',
                background: 'linear-gradient(90deg, #00E5FF, #B28CFF)',
                color: '#13141C',
                fontWeight: '700',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}>
                <span style={{
                  position: 'absolute',
                  inset: '-4px',
                  border: '1.5px dashed #00E5FF',
                  borderRadius: '12px',
                  pointerEvents: 'none'
                }}></span>
                View Projects
              </button>
              
              <button style={{
                background: '#1C1E26',
                color: '#FFFFFF',
                fontWeight: '600',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer'
              }}>
                Let's Talk
              </button>
            </div>
            
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', color: '#6B7280', marginBottom: '1rem' }}>
                TECHNOLOGIES
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Flutter', 'Python', 'Firebase', 'OpenAI SDK', 'LangChain', 'FastAPI'].map(tech => (
                  <span key={tech} className="pill-tech">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Visuals */}
          <div style={{ position: 'relative', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }} className="md-visuals">
            
            {/* Base Card */}
            <motion.div 
              className="system-status-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 50px rgba(0, 229, 255, 0.2)",
                borderColor: "rgba(0, 229, 255, 0.4)"
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ background: '#21242E', padding: '0.75rem', borderRadius: '12px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" y1="16" x2="8" y2="16"></line>
                    <line x1="16" y1="16" x2="16" y2="16"></line>
                  </svg>
                </div>
                <div style={{ textAlign: 'right', flex: 1 }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.1em', color: '#6B7280', marginBottom: '0.25rem' }}>SYSTEM STATUS</div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: '#FF66A3' }}>Neural Link Active</div>
                </div>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', position: 'relative', marginBottom: '0.5rem' }}>
                <motion.div 
                  style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'linear-gradient(90deg, #00E5FF, #B28CFF)', borderRadius: '3px', boxShadow: '0 0 10px rgba(0,229,255,0.5)' }}
                  initial={{ width: 0 }}
                  animate={{ width: '84%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                ></motion.div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9CA3AF' }}>
                <span>AI Agent Training</span>
                <span>84% Optimized</span>
              </div>
              
              {/* Overlapping Card */}
              <motion.div 
                className="overlapping-card"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  x: -5,
                  boxShadow: "0 15px 35px rgba(178, 140, 255, 0.3)",
                  borderColor: "rgba(178, 140, 255, 0.5)"
                }}
              >
                <div style={{ background: 'rgba(178, 140, 255, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B28CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFF' }}>Voice Bot v2.4</div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Real-time Latency: 120ms</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2rem',
          textAlign: 'left',
          marginTop: '6rem'
        }} className="md-stats-grid">
          
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2' }}>3+</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#6B7280' }}>YEARS EXPERIENCE</div>
          </div>

          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2' }}>25+</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#6B7280' }}>MOBILE APPS</div>
          </div>

          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2' }}>12</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#6B7280' }}>AI AGENT DEPLOYS</div>
          </div>

          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2' }}>100%</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#6B7280' }}>CLOUD NATIVE</div>
          </div>
        </div>

      </div>
      
      <style>{`
        @media(min-width: 900px) {
          .md-visuals { justify-content: flex-end !important; }
        }
        @media(min-width: 768px) {
          .md-stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
