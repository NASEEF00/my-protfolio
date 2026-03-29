import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" style={{ 
      background: '#0B0D11', 
      borderTopLeftRadius: '32px', 
      borderTopRightRadius: '32px',
      padding: '4rem 0 2.5rem',
      marginTop: '6rem'
    }}>
      <div className="container" style={{ paddingLeft: 'unset' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }} className="md-footer-row">
          
          {/* Logo */}
          <div style={{ color: '#00E5FF', fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
            Mohammed Naseef
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Email', 'LinkedIn', 'GitHub', 'Twitter'].map(link => (
              <a href="#" key={link} style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: '600' }}>
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: '500', textAlign: 'center' }}>
            © {new Date().getFullYear()} Mohammed Naseef. Built with Intentional Asymmetry.
          </div>

        </div>
      </div>
      
      <style>{`
        @media(min-width: 768px) {
          .md-footer-row { 
            flex-direction: row !important; 
          }
        }
      `}</style>
    </footer>
  );
};

export default Contact;
