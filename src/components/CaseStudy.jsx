const CASE_STUDIES = [
  {
    client: 'United Way of the Mid-South',
    challenge: 'Needed to align technology strategy, portfolio management, and service delivery across complex regional initiatives.',
    role: [
      'Led technology strategy and portfolio management for an $18M state-funded initiative.',
      'Orchestrated a $250K countywide digital access program.',
      'Designed an AI-enabled service transformation effort valued at $350K.',
    ],
    outcome: 'Improved visibility, coordination, decision-making, and execution across high-impact community programs.',
    proofPoints: [
      '$18M technology strategy and portfolio management initiative',
      '$250K innovation and digital access initiative',
      '$350K AI-enabled service transformation effort',
    ],
  },
];

function Block({ label, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p style={{ color: 'var(--gold)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
        {label}
      </p>
      {children}
    </div>
  );
}

export default function CaseStudy() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      {CASE_STUDIES.map((cs) => (
        <article
          key={cs.client}
          style={{
            border: '1px solid var(--line-on-light)',
            padding: '48px 44px',
            background: 'var(--paper)',
          }}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', marginBottom: 36 }}>{cs.client}</h3>

          <Block label="Challenge">
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--ink)' }}>{cs.challenge}</p>
          </Block>

          <Block label="StrategEASE Role">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cs.role.map((line) => (
                <li key={line} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink)', paddingLeft: 20, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>&mdash;</span>
                  {line}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Outcome">
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--ink)' }}>{cs.outcome}</p>
          </Block>

          <div>
            <p style={{ color: 'var(--gold)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Proof Points
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line-on-light)', border: '1px solid var(--line-on-light)' }} className="proof-grid">
              {cs.proofPoints.map((p) => (
                <div key={p} style={{ background: 'var(--cream)', padding: '22px 20px', fontSize: 14.5, lineHeight: 1.6, fontWeight: 500 }}>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
      <style>{`
        @media (max-width: 700px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
