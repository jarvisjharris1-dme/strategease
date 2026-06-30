import { Link } from 'react-router-dom';

export default function CtaBand({
  heading = 'Turning vision into measurable outcomes starts with one conversation.',
  buttonLabel = 'Request an Executive Briefing',
}) {
  return (
    <section className="section ink" style={{ paddingTop: 72, paddingBottom: 72, textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <h2 style={{ marginBottom: 32 }}>{heading}</h2>
        <Link to="/contact" className="btn btn-gold">
          {buttonLabel}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
