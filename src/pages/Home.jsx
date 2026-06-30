import { Link } from 'react-router-dom';
import StrategEaseOS from '../components/StrategEaseOS';
import ProvenImpact from '../components/ProvenImpact';
import CtaBand from '../components/CtaBand';
import founderPhoto from '../assets/founder/nym.jpeg';

const DIFFERENTIATORS = [
  {
    title: 'We see the whole system',
    copy: 'We map the full ecosystem of people, process, technology, data, and partners before we recommend anything.',
  },
  {
    title: 'We align before we act',
    copy: 'We get leadership, priorities, and governance pointed in the same direction so the right things get done together.',
  },
  {
    title: 'We deliver measurable impact',
    copy: 'We pair strategy with execution cadence, metrics, and decision support that drive real outcomes.',
  },
];

export default function Home() {
  return (
    <>
      <section className="section ink hero-section">
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 22 }}>SEE &middot; ALIGN &middot; DELIVER</p>
              <h1 style={{ color: 'var(--paper)', marginBottom: 18 }}>
                We build the operating systems that turn strategy into measurable outcomes.
              </h1>
              <p style={{ color: 'var(--gold-bright)', fontSize: 17, fontWeight: 600, marginBottom: 26, lineHeight: 1.5 }}>
                Trusted to lead $20M+ in transformation initiatives across government, healthcare, education, and nonprofit organizations.
              </p>
              <p style={{ color: 'var(--muted-on-ink)', fontSize: 18, maxWidth: 540, marginBottom: 30, lineHeight: 1.7 }}>
                StrategEASE is a boutique strategy and execution firm for government, nonprofit, education, and mission-driven organizations. We help leaders see the whole system, align the organization, and deliver results that hold up.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
                <Link to="/contact" className="btn btn-gold">Request an Executive Briefing</Link>
                <a href="#how-we-work" className="btn btn-outline-ink">See How We Work</a>
              </div>
              <p style={{ color: 'var(--muted-on-ink)', fontSize: 13.5, fontStyle: 'italic' }}>
                Now accepting a limited number of executive briefing requests each quarter.
              </p>
            </div>

            <div aria-hidden="true" style={{ position: 'relative' }}>
              <svg viewBox="0 0 420 420" style={{ width: '100%', maxWidth: 420, margin: '0 auto', display: 'block' }}>
                <circle cx="210" cy="210" r="165" fill="none" stroke="var(--line-on-ink)" strokeDasharray="2 7" />
                <circle cx="210" cy="210" r="105" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
                <circle cx="210" cy="210" r="58" fill="var(--ink-soft)" stroke="var(--gold)" strokeWidth="1.5" />
                {[0, 72, 144, 216, 288].map((a) => {
                  const rad = (a * Math.PI) / 180;
                  const x = 210 + 165 * Math.cos(rad);
                  const y = 210 + 165 * Math.sin(rad);
                  return <circle key={a} cx={x} cy={y} r="6" fill="var(--gold-bright)" />;
                })}
                <text x="210" y="206" textAnchor="middle" fill="var(--gold-bright)" fontSize="11" fontFamily="Inter" letterSpacing="2" fontWeight="600">
                  STRATEGEASE
                </text>
                <text x="210" y="224" textAnchor="middle" fill="var(--paper)" fontSize="11" fontFamily="Inter" letterSpacing="2">
                  OS
                </text>
              </svg>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section cream">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="eyebrow on-light" style={{ marginBottom: 18 }}>Who we are</p>
          <h2 style={{ marginBottom: 24 }}>
            StrategEASE is not a project management company.
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink)', lineHeight: 1.75 }}>
            We build the operating systems that let organizations execute strategy and scale innovation. Our work sits where enterprise strategy, innovation, AI, portfolio governance, and execution meet.
          </p>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <div className="diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--gold)', marginBottom: 16, letterSpacing: '0.05em' }}>
                  0{i + 1}
                </div>
                <h3 style={{ marginBottom: 14 }}>{d.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.7 }}>{d.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 800px) { .diff-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56, alignItems: 'center' }}>
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--gold)',
                margin: '0 auto',
              }}
            >
              <img
                src={founderPhoto}
                alt="Nym, Founder of StrategEASE"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <p className="eyebrow on-light" style={{ marginBottom: 16 }}>Meet the Founder</p>
              <h2 style={{ marginBottom: 6 }}>Nym</h2>
              <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 14.5, letterSpacing: '0.03em', marginBottom: 22, textTransform: 'uppercase' }}>
                Founder, StrategEASE
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--ink)', marginBottom: 16 }}>
                StrategEASE was founded by Nym, a strategy and execution leader known for helping organizations turn ambiguity into action. Her work sits at the intersection of enterprise strategy, innovation, AI adoption, governance, and measurable execution.
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--muted)' }}>
                As the winner of Orlando Startup Weekend, Nym demonstrated her ability to help teams move quickly through uncertainty, clarify market opportunities, and focus on achievable outcomes. That same operating mindset now shapes how StrategEASE helps governments, nonprofits, healthcare, education, and mission-driven organizations build systems that deliver.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .founder-grid { grid-template-columns: 1fr !important; text-align: center; }
          }
        `}</style>
      </section>

      <section id="how-we-work" className="section ink">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>The StrategEASE OS</p>
            <h2 style={{ color: 'var(--paper)', marginBottom: 20 }}>A systems approach to drive measurable outcomes.</h2>
            <p style={{ color: 'var(--muted-on-ink)', fontSize: 17 }}>
              SEE the system. ALIGN the organization. DELIVER the outcome.
            </p>
          </div>
          <StrategEaseOS />
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <h2 style={{ marginBottom: 8 }}>Proven Impact</h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 44, maxWidth: 600 }}>
            Real dollar impact for the organizations we serve.
          </p>
          <ProvenImpact />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
