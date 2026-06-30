import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '', organization: '', role: '', email: '', phone: '', outcome: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Name is required.';
    if (!values.organization.trim()) e.organization = 'Organization is required.';
    if (!values.email.trim()) e.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!values.outcome.trim()) e.outcome = 'Please tell us what outcome you are trying to drive.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      const subject = encodeURIComponent(`Executive Briefing Request — ${values.organization}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\n` +
        `Organization: ${values.organization}\n` +
        `Role / Title: ${values.role || '—'}\n` +
        `Email: ${values.email}\n` +
        `Phone: ${values.phone || '—'}\n\n` +
        `What outcome are you trying to drive?\n${values.outcome}`
      );
      window.location.href = `mailto:info@strategeaseinc.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  const fieldStyle = {
    width: '100%',
    padding: '13px 16px',
    background: 'var(--ink-soft)',
    border: '1px solid var(--line-on-ink)',
    color: 'var(--paper)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    borderRadius: 2,
  };

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.03em',
    color: 'var(--muted-on-ink)',
    marginBottom: 7,
  };

  return (
    <section className="section ink page-hero" style={{ minHeight: '70vh' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56 }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Contact</p>
            <h1 style={{ color: 'var(--paper)', marginBottom: 16 }}>Request an Executive Briefing</h1>
            <p style={{ color: 'var(--muted-on-ink)', fontSize: 16.5, lineHeight: 1.7, marginBottom: 14 }}>
              Tell us what you are trying to move. We will bring a point of view.
            </p>
            <p style={{ color: 'var(--gold-bright)', fontSize: 13.5, fontStyle: 'italic', marginBottom: 36 }}>
              Now accepting a limited number of executive briefing requests each quarter.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: 15 }}>
              <div>
                <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Address</p>
                <p style={{ color: 'var(--muted-on-ink)' }}>1910 Madison Avenue #2755<br />Memphis, TN 38104</p>
              </div>
              <div>
                <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Phone</p>
                <a href="tel:9012137765" style={{ color: 'var(--muted-on-ink)' }}>901-213-7765 </a>
              </div>
              <div>
                <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Email</p>
                <a href="mailto:info@strategeaseinc.com" style={{ color: 'var(--muted-on-ink)' }}>info@strategeaseinc.com</a>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--ink-soft)', border: '1px solid var(--line-on-ink)', padding: '36px 32px' }}>
            {submitted ? (
              <div role="status" style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: 52, height: 52, border: '1.5px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                  <svg width="20" height="15" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8L8 15L21 1" stroke="var(--gold-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--paper)', marginBottom: 10 }}>Thank you.</h3>
                <p style={{ color: 'var(--muted-on-ink)', fontSize: 15 }}>
                  Your email client should have opened with your request addressed to info@strategeaseinc.com. If it didn't open automatically, please email us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input id="name" name="name" type="text" value={values.name} onChange={handleChange} style={fieldStyle} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <p id="name-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="organization" style={labelStyle}>Organization</label>
                  <input id="organization" name="organization" type="text" value={values.organization} onChange={handleChange} style={fieldStyle} aria-invalid={!!errors.organization} aria-describedby={errors.organization ? 'org-error' : undefined} />
                  {errors.organization && <p id="org-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.organization}</p>}
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="role" style={labelStyle}>Role / Title</label>
                  <input id="role" name="role" type="text" value={values.role} onChange={handleChange} style={fieldStyle} />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" value={values.email} onChange={handleChange} style={fieldStyle} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
                  {errors.email && <p id="email-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="phone" style={labelStyle}>Phone <span style={{ textTransform: 'none', fontWeight: 400, opacity: 0.7 }}>(optional)</span></label>
                  <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} style={fieldStyle} />
                </div>

                <div style={{ marginBottom: 26 }}>
                  <label htmlFor="outcome" style={labelStyle}>What outcome are you trying to drive?</label>
                  <textarea id="outcome" name="outcome" rows={4} value={values.outcome} onChange={handleChange} style={{ ...fieldStyle, resize: 'vertical' }} aria-invalid={!!errors.outcome} aria-describedby={errors.outcome ? 'outcome-error' : undefined} />
                  {errors.outcome && <p id="outcome-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.outcome}</p>}
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Request an Executive Briefing
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
