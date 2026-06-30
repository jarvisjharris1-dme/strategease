import { Link } from 'react-router-dom';

export default function CtaBand({
  heading = 'Turning vision into measurable outcomes starts with one conversation.',
  buttonLabel = 'Request an Executive Briefing',
  showUrgency = true,
}) {
  return (
    <section className="section ink cta-band" style={{ paddingTop: 64, paddingBottom: 64, textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <h2 style={{ marginBottom: 28 }}>{heading}</h2>
        <Link to="/contact" className="btn btn-gold">
          {buttonLabel}
          <span aria-hidden="true">&rarr;</span>
        </Link>
        {showUrgency && (
          <p style={{ marginTop: 20, fontSize: 13.5, color: 'var(--muted-on-ink)', fontStyle: 'italic' }}>
            Now accepting a limited number of executive briefing requests each quarter.
          </p>
        )}
      </div>
      <style>{`
        @media (max-width: 480px) {
          .cta-band { padding-top: 44px !important; padding-bottom: 44px !important; }
        }
      `}</style>
    </section>
  );
}
