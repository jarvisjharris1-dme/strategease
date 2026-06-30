import SignatureTools from '../components/SignatureTools';
import CtaBand from '../components/CtaBand';

const SERVICE_GROUPS = [
  { group: 'Strategy', items: ['Enterprise Strategy', 'Innovation Strategy', 'Annual Operating Planning', 'Strategic Planning'] },
  { group: 'Governance and Portfolio', items: ['Portfolio and Program Governance', 'PMO Design and Optimization', 'Organizational Operating Models', 'Decision and Operational Governance'] },
  { group: 'AI and Digital', items: ['AI Strategy and Adoption', 'Digital Transformation', 'Data Strategy and KPI Frameworks'] },
  { group: 'Execution', items: ['Cross-functional Execution', 'Executive Dashboards', 'Business Process Improvement', 'Operational Excellence and Change Management'] },
];

const LADDER = [
  { n: '1', title: 'Executive Briefing', copy: 'A focused working session to understand your priorities and where the system is getting stuck.' },
  { n: '2', title: 'Assessment and Roadmap', copy: 'We map the ecosystem, surface what matters, and deliver an operating model, portfolio view, and roadmap.' },
  { n: '3', title: 'Build the Operating System', copy: 'We stand up the governance, planning cadence, dashboards, and execution support that make strategy stick.' },
  { n: '4', title: 'Fractional Advisory', copy: 'Ongoing executive partnership as a fractional Chief Strategy Officer or Innovation Strategy Office, so outcomes hold over time.' },
];

export default function Services() {
  return (
    <>
      <section className="section ink" style={{ paddingTop: 80, paddingBottom: 70 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>What We Do</p>
          <h1 style={{ color: 'var(--paper)', marginBottom: 22 }}>
            A system of services, not a menu of tasks.
          </h1>
          <p style={{ color: 'var(--muted-on-ink)', fontSize: 18, lineHeight: 1.7 }}>
            Our work sits where enterprise strategy, innovation, AI, portfolio governance, and execution meet.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <div className="service-groups" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '56px 48px' }}>
            {SERVICE_GROUPS.map((g) => (
              <div key={g.group}>
                <h3 style={{ marginBottom: 20, color: 'var(--gold)', fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
                  {g.group}
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {g.items.map((item, i) => (
                    <li
                      key={item}
                      style={{
                        padding: '16px 0',
                        borderBottom: i < g.items.length - 1 ? '1px solid var(--line-on-light)' : 'none',
                        fontFamily: 'var(--font-display)',
                        fontSize: 18,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 720px) { .service-groups { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section cream">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 60px' }}>
            <p className="eyebrow on-light" style={{ marginBottom: 16 }}>How We Engage</p>
            <h2>A path that starts small and grows into an ongoing partnership.</h2>
          </div>

          <div className="ladder-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line-on-light)', border: '1px solid var(--line-on-light)' }}>
            {LADDER.map((step) => (
              <div key={step.n} style={{ background: 'var(--cream)', padding: '36px 28px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--gold)', marginBottom: 16 }}>
                  {step.n}
                </div>
                <h4 style={{ marginBottom: 12, fontSize: 17 }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .ladder-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 560px) { .ladder-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <section className="section ink">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Signature Tools</p>
            <h2 style={{ color: 'var(--paper)', marginBottom: 18 }}>Proprietary tools built for the work.</h2>
            <p style={{ color: 'var(--muted-on-ink)', fontSize: 16 }}>
              StrategEASE uses a set of proprietary tools to help leaders see the system, align the organization, and deliver measurable outcomes.
            </p>
          </div>
          <SignatureTools />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
