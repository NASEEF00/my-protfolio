import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{ padding: '1.5rem 0', background: 'rgba(14, 16, 21, 0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          Mohammed Naseef
        </div>
        
        {/* Links - Desktop */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="md-flex">
          <a href="#home" style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: '500', borderBottom: '2px solid var(--accent-cyan)' }}>Home</a>
          <a href="#skills" className="dashed-border-rest" style={{ color: 'var(--nav-link)', fontSize: '0.85rem' }}>Skills</a>
          <a href="#projects" className="dashed-border-rest" style={{ color: 'var(--nav-link)', fontSize: '0.85rem' }}>Projects</a>
          <a href="#experience" style={{ color: 'var(--nav-link)', fontSize: '0.85rem' }}>Experience</a>
          <a href="#contact" style={{ color: 'var(--nav-link)', fontSize: '0.85rem' }}>Contact</a>
          <button style={{
            background: 'linear-gradient(90deg, #00E5FF, #B28CFF)',
            color: '#13141C',
            fontWeight: '600',
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}>
            Resume
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMobileMenu} style={{ cursor: 'pointer', display: 'block' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-cyan)' }}>
            {isMobileMenuOpen ? (
              <line x1="18" y1="6" x2="6" y2="18"></line>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-card)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderBottom: '1px solid var(--border-subtle)', zIndex: 99 }}>
          <a href="#home" onClick={toggleMobileMenu} style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: '600' }}>Home</a>
          <a href="#skills" onClick={toggleMobileMenu} style={{ color: 'var(--nav-link)', fontSize: '1rem' }}>Skills</a>
          <a href="#projects" onClick={toggleMobileMenu} style={{ color: 'var(--nav-link)', fontSize: '1rem' }}>Projects</a>
          <a href="#experience" onClick={toggleMobileMenu} style={{ color: 'var(--nav-link)', fontSize: '1rem' }}>Experience</a>
          <a href="#contact" onClick={toggleMobileMenu} style={{ color: 'var(--nav-link)', fontSize: '1rem' }}>Contact</a>
          <button style={{
            background: 'linear-gradient(90deg, #00E5FF, #B28CFF)',
            color: '#13141C',
            fontWeight: '600',
            padding: '0.8rem',
            borderRadius: '6px',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Resume
          </button>
        </div>
      )}
      
      {/* Basic responsive style */}
      <style>{`
        @media(min-width: 768px) {
          .md-flex { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
