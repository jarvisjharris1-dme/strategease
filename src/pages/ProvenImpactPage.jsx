import ProvenImpact from '../components/ProvenImpact';
import CtaBand from '../components/CtaBand';

export default function ProvenImpactPage() {
  return (
    <>
      <section className="section ink" style={{ paddingTop: 80, paddingBottom: 70 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>Proven Impact</p>
          <h1 style={{ color: 'var(--paper)', marginBottom: 22 }}>
            Real dollar impact, not just deliverables.
          </h1>
          <p style={{ color: 'var(--muted-on-ink)', fontSize: 18, lineHeight: 1.7 }}>
            We measure our work the way our clients measure theirs: in outcomes that hold up after we leave the room.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <ProvenImpact />
        </div>
      </section>

      <section className="section cream">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow on-light" style={{ marginBottom: 18 }}>Case in Point</p>
          <h2 style={{ marginBottom: 24 }}>United Way of the Mid-South</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink)' }}>
            Across a multi-year engagement, StrategEASE led technology strategy and portfolio management for an $18 million state-funded initiative, orchestrated a $250K countywide digital access program, and designed an AI-enabled crisis call center reengineering effort valued at $350K &mdash; each built on the same operating system: see the whole ecosystem, align leadership and priorities, then execute with measurable cadence.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
