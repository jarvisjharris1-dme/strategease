const PHASES = [
  { n: '1', label: 'Discover', purpose: 'Understand the system. Explore the ecosystem, stakeholders, data, and priorities.', deliverable: 'Ecosystem Map', angle: -135 },
  { n: '2', label: 'Diagnose', purpose: 'Reveal what matters. Surface pain points, dependencies, capability gaps, and governance breakdowns.', deliverable: 'Insights and Opportunity Matrix', angle: -45 },
  { n: '3', label: 'Execute', purpose: 'Drive execution. Activate priorities, set cadence, empower owners, deliver quick wins.', deliverable: 'Execution Plan and Quick Wins', angle: 45 },
  { n: '4', label: 'Evolve', purpose: 'Sustain and improve. Measure impact, refine the system, build capability.', deliverable: 'Outcomes Dashboard and Continuous Improvement', angle: 135 },
];

export default function StrategEaseOS() {
  const cx = 300, cy = 300, r = 195;

  const pos = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return (
    <div className="os-wrapper" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 600px) 1fr', gap: 56, alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600, margin: '0 auto' }}>
        <svg
          viewBox="0 0 600 600"
          role="img"
          aria-label="The StrategEASE Operating System: five connected phases — Discover, Diagnose, the system at the center for clarity and alignment, Execute, and Evolve — forming a continuous cycle around organizational outcomes."
          style={{ width: '100%', height: 'auto' }}
        >
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--line-on-ink)" strokeWidth="1" strokeDasharray="2 6" />

          {PHASES.map((p) => {
            const { x, y } = pos(p.angle);
            return (
              <line key={`line-${p.n}`} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--line-on-ink)" strokeWidth="1" />
            );
          })}

          <circle cx={cx} cy={cy} r="92" fill="var(--ink-soft)" stroke="var(--gold)" strokeWidth="1.5" />
          <text x={cx} y={cy - 14} textAnchor="middle" fill="var(--gold-bright)" fontSize="11" fontFamily="Inter" letterSpacing="2" fontWeight="600">
            THE SYSTEM
          </text>
          <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--paper)" fontSize="13.5" fontFamily="Fraunces" fontWeight="500">
            <tspan x={cx} dy="0">Clarity. Alignment.</tspan>
            <tspan x={cx} dy="20">Momentum.</tspan>
          </text>

          {PHASES.map((p) => {
            const { x, y } = pos(p.angle);
            return (
              <g key={p.n}>
                <circle cx={x} cy={y} r="54" fill="var(--ink)" stroke="var(--gold)" strokeWidth="1.5" />
                <text x={x} y={y - 8} textAnchor="middle" fill="var(--gold-bright)" fontSize="10.5" fontFamily="Inter" fontWeight="700" letterSpacing="1">
                  {p.n}
                </text>
                <text x={x} y={y + 12} textAnchor="middle" fill="var(--paper)" fontSize="14.5" fontFamily="Fraunces" fontWeight="500">
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {PHASES.map((p) => (
          <div key={p.n} style={{ display: 'flex', gap: 18 }}>
            <span
              style={{
                flexShrink: 0,
                width: 36, height: 36,
                border: '1px solid var(--gold)',
                color: 'var(--gold-bright)',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 13,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              {p.n}
            </span>
            <div>
              <h4 style={{ color: 'var(--paper)', marginBottom: 6, fontSize: 18 }}>{p.label}</h4>
              <p style={{ color: 'var(--muted-on-ink)', fontSize: 14.5, marginBottom: 6 }}>{p.purpose}</p>
              <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em' }}>
                Deliverable: {p.deliverable}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-wrapper { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
