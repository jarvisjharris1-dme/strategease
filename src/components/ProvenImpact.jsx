const RESULTS = [
  {
    amount: '$18M',
    title: 'Technology Strategy and Portfolio Management',
    copy: 'Led technology strategy and portfolio management of an $18 million state-funded initiative delivering wraparound social services across the region.',
  },
  {
    amount: '$250K',
    title: 'Innovation Orchestrator',
    copy: 'Orchestrated a digital-first, countywide $250K mobile access initiative expanding equitable access to resources.',
  },
  {
    amount: '$350K',
    title: 'AI-Enabled Service Transformation',
    copy: 'Designed the reengineered crisis call center using AI tracking for agency referral management and crisis triage across a statewide network.',
  },
];

export default function ProvenImpact({ banner = 'Proven Impact: United Way of the Mid-South' }) {
  return (
    <div>
      <p className="eyebrow" style={{ marginBottom: 14 }}>{banner}</p>
      <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line-on-light)', border: '1px solid var(--line-on-light)' }}>
        {RESULTS.map((r) => (
          <div key={r.amount} style={{ background: 'var(--paper)', padding: '40px 32px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: 'var(--gold)', marginBottom: 14, fontWeight: 500 }}>
              {r.amount}
            </div>
            <h4 style={{ fontSize: 16, marginBottom: 10 }}>{r.title}</h4>
            <p style={{ fontSize: 14.5, color: 'var(--muted)' }}>{r.copy}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 800px) {
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
