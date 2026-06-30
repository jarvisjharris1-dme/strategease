import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--muted-on-ink)', paddingTop: 'var(--space-6)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: 40,
            paddingBottom: 56,
          }}
          className="footer-grid"
        >
          <div>
            <Logo variant="light" />
            <p style={{ marginTop: 18, fontSize: 14, maxWidth: 280, color: 'var(--muted-on-ink)' }}>
              Turning Vision Into Measurable Outcomes.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-bright)', marginBottom: 18, fontWeight: 600 }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <li>Enterprise &amp; Innovation Strategy</li>
              <li>AI Strategy &amp; Adoption</li>
              <li>Portfolio &amp; Program Governance</li>
              <li>Annual Operating Planning</li>
              <li>Execution</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-bright)', marginBottom: 18, fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/services">What We Do</Link></li>
              <li><Link to="/proven-impact">Proven Impact</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-bright)', marginBottom: 18, fontWeight: 600 }}>
              Contact
            </h4>
            <address style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 1.8 }}>
              1910 Madison Avenue #2755<br />
              Memphis, TN 38104<br />
              <a href="tel:8559339327">(855) 933-EASE</a><br />
              <a href="mailto:info@strategeaseinc.com">info@strategeaseinc.com</a>
            </address>
          </div>
        </div>

        <div className="hairline on-ink" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            padding: '24px 0 32px',
            fontSize: 12.5,
            color: 'var(--muted-on-ink)',
          }}
        >
          <span>Copyright 2026 StrategEASE LLC. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        footer a:hover { color: var(--gold-bright); }
      `}</style>
    </footer>
  );
}
