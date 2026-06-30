import CaseStudy from '../components/CaseStudy';
import CtaBand from '../components/CtaBand';

export default function ProvenImpactPage() {
  return (
    <>
      <section className="section ink page-hero">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Proven Impact</p>
          <h1 style={{ color: 'var(--paper)', marginBottom: 18 }}>
            Real dollar impact, not just deliverables.
          </h1>
          <p style={{ color: 'var(--muted-on-ink)', fontSize: 17, lineHeight: 1.7 }}>
            We measure our work the way our clients measure theirs: in outcomes that hold up after we leave the room.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <CaseStudy />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
