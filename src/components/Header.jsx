import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'What We Do', to: '/services' },
  { label: 'Proven Impact', to: '/proven-impact' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location?.pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(11,11,11,0.96)' : 'var(--ink)',
        borderBottom: '1px solid var(--line-on-ink)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 88 }}>
        <Link to="/" aria-label="StrategEASE home">
          <Logo variant="light" />
        </Link>

        <nav aria-label="Primary" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={({ isActive }) => ({
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: isActive ? 'var(--gold-bright)' : 'var(--muted-on-ink)',
                borderBottom: isActive ? '1.5px solid var(--gold-bright)' : '1.5px solid transparent',
                paddingBottom: 4,
                transition: 'color 0.2s ease',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold" style={{ padding: '12px 22px', fontSize: 13 }}>
            Request an Executive Briefing
          </Link>
        </nav>

        <button
          className="mobile-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--line-on-ink)',
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--paper)',
          }}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            {open ? (
              <path d="M1 1L19 13M19 1L1 13" stroke="var(--gold-bright)" strokeWidth="1.6" />
            ) : (
              <>
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.6" />
                <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.6" />
                <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.6" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="mobile-menu"
          style={{
            background: 'var(--ink)',
            borderTop: '1px solid var(--line-on-ink)',
            padding: '8px 0 28px',
          }}
        >
          <nav aria-label="Mobile" className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  padding: '16px 4px',
                  fontSize: 17,
                  fontFamily: 'var(--font-display)',
                  borderBottom: '1px solid var(--line-on-ink)',
                  color: isActive ? 'var(--gold-bright)' : 'var(--paper)',
                })}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-gold" style={{ marginTop: 20, justifyContent: 'center' }}>
              Request an Executive Briefing
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
