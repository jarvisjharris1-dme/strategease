const TOOLS = [
  { name: 'Ecosystem Canvas', tag: 'Make the invisible system visible.', copy: 'A visual map of relationships, dependencies, and information flows across the ecosystem.' },
  { name: 'Operating Model Canvas', tag: 'Design how work gets done.', copy: 'A blueprint for roles, processes, governance, and enablers aligned to strategy.' },
  { name: 'Portfolio Dashboard', tag: 'Make better decisions, faster.', copy: 'An executive view of initiatives, funding, risk, impact, and performance.' },
  { name: 'Annual Operating Plan', tag: 'Align, prioritize, execute.', copy: 'A twelve-month plan with priorities, milestones, owners, and success metrics.' },
  { name: 'Executive Impact Review', tag: 'Track what matters, drive what is next.', copy: 'A quarterly review of outcomes, insights, decisions, and next actions.' },
];

export default function SignatureTools() {
  return (
    <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line-on-ink)', border: '1px solid var(--line-on-ink)' }}>
      {TOOLS.map((t) => (
        <div key={t.name} style={{ background: 'var(--ink)', padding: '36px 30px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ color: 'var(--paper)', fontSize: 17, marginBottom: 10 }}>
            {t.name}<sup style={{ fontSize: 10, color: 'var(--gold-bright)', marginLeft: 3 }}>™</sup>
          </h4>
          <p style={{ color: 'var(--gold-bright)', fontSize: 13.5, fontWeight: 600, marginBottom: 10 }}>{t.tag}</p>
          <p style={{ color: 'var(--muted-on-ink)', fontSize: 14, lineHeight: 1.6 }}>{t.copy}</p>
        </div>
      ))}
      <style>{`
        @media (max-width: 900px) {
          .tools-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .tools-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
