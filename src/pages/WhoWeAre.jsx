import CtaBand from '../components/CtaBand';
import founderPhoto from '../assets/founder/nym.jpeg';

export default function WhoWeAre() {
  return (
    <>
      <section className="section ink page-hero">
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
                alt="Nym Chevalier, Founder and Chief Strategy Officer of StrategEASE"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <p className="eyebrow on-light" style={{ marginBottom: 16 }}>Meet the Founder</p>
              <h2 style={{ marginBottom: 6 }}>Nym</h2>
              <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 14.5, letterSpacing: '0.03em', marginBottom: 22, textTransform: 'uppercase' }}>
                Founder &amp; Chief Strategy Officer, StrategEASE
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--ink)', marginBottom: 16 }}>
                Nym Chevalier is the Founder and Chief Strategy Officer of StrategEASE, where she helps leaders turn ambiguity into aligned execution. Her work combines enterprise strategy, governance, AI, portfolio management, and operating model design to build systems that produce measurable outcomes.
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--ink)', marginBottom: 16 }}>
                Nym has led technology strategy and portfolio management across an $18 million state-funded initiative, orchestrated a $250,000 countywide digital access program, and designed an AI-enabled service transformation valued at $350,000 for organizations serving communities across the Mid-South. She brings that same systems mindset to governments, nonprofits, healthcare, education, and mission-driven organizations seeking sustainable transformation.
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--muted)' }}>
                As the winning founder of Orlando Startup Weekend, Nym is recognized for helping teams make sense of complexity, uncover marketable opportunities, and translate strategy into practical, measurable execution.
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

      <section className="section paper">
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
