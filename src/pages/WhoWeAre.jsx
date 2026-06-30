import CtaBand from '../components/CtaBand';

export default function WhoWeAre() {
  return (
    <>
      <section className="section ink" style={{ paddingTop: 80, paddingBottom: 70 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>Who We Are</p>
          <h1 style={{ color: 'var(--paper)' }}>
            A boutique strategy and execution firm for mission-driven leaders.
          </h1>
        </div>
      </section>

      <section className="section paper">
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ fontSize: 19, lineHeight: 1.8, marginBottom: 28 }}>
            StrategEASE is a boutique strategy and execution firm. We help mission-driven organizations turn complexity into clarity and strategy into measurable impact.
          </p>

          <div className="hairline" style={{ margin: '52px 0' }} />

          <p className="eyebrow on-light" style={{ marginBottom: 16 }}>What We Believe</p>
          <h3 style={{ marginBottom: 22 }}>Technology alone never solves an organizational problem.</h3>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--muted)' }}>
            Real transformation takes strategy, governance, process, people, data, AI, execution, and steady improvement working together. We recommend governance before technology, and we treat AI as an accelerator, not the answer.
          </p>

          <div className="hairline" style={{ margin: '52px 0' }} />

          <p className="eyebrow on-light" style={{ marginBottom: 16 }}>How We Work</p>
          <h3 style={{ marginBottom: 22 }}>We see the whole system before we act.</h3>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--muted)' }}>
            We align leaders and priorities first. Then we pair strategy with the execution cadence, metrics, and decision support that produce outcomes you can measure.
          </p>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="audience-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <p className="eyebrow on-light" style={{ marginBottom: 16 }}>Who We Serve</p>
              <h2>Organizations doing work that matters.</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                'City and county governments, state agencies, and public-sector innovation offices',
                'United Ways, nonprofits, and foundations',
                'Education organizations and mission-driven companies',
                'Healthcare and community-serving organizations',
              ].map((item, i) => (
                <li key={item} style={{ padding: '20px 0', borderBottom: i < 3 ? '1px solid var(--line-on-light)' : 'none', fontSize: 16.5 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <style>{`@media (max-width: 800px) { .audience-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <CtaBand />
    </>
  );
}
