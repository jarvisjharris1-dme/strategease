import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '', organization: '', role: '', email: '', outcome: '',
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
      setSubmitted(true);
    }
  };

  const fieldStyle = {
    width: '100%',
    padding: '14px 16px',
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
    marginBottom: 8,
  };

  return (
    <section className="section ink" style={{ paddingTop: 80, minHeight: '70vh' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64 }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 18 }}>Contact</p>
            <h1 style={{ color: 'var(--paper)', marginBottom: 22 }}>Request an Executive Briefing</h1>
            <p style={{ color: 'var(--muted-on-ink)', fontSize: 17, lineHeight: 1.75, marginBottom: 48 }}>
              Tell us what you are trying to move. We will bring a point of view.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 15 }}>
              <div>
                <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Address</p>
                <p style={{ color: 'var(--muted-on-ink)' }}>1910 Madison Avenue #2755<br />Memphis, TN 38104</p>
              </div>
              <div>
                <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Phone</p>
                <a href="tel:8559339327" style={{ color: 'var(--muted-on-ink)' }}>(855) 933-EASE</a>
              </div>
              <div>
                <p style={{ color: 'var(--gold-bright)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Email</p>
                <a href="mailto:info@strategeaseinc.com" style={{ color: 'var(--muted-on-ink)' }}>info@strategeaseinc.com</a>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--ink-soft)', border: '1px solid var(--line-on-ink)', padding: '44px 40px' }}>
            {submitted ? (
              <div role="status" style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 56, height: 56, border: '1.5px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8L8 15L21 1" stroke="var(--gold-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--paper)', marginBottom: 12 }}>Thank you.</h3>
                <p style={{ color: 'var(--muted-on-ink)', fontSize: 15.5 }}>
                  We have received your request and a member of our team will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: 22 }}>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input id="name" name="name" type="text" value={values.name} onChange={handleChange} style={fieldStyle} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <p id="name-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: 22 }}>
                  <label htmlFor="organization" style={labelStyle}>Organization</label>
                  <input id="organization" name="organization" type="text" value={values.organization} onChange={handleChange} style={fieldStyle} aria-invalid={!!errors.organization} aria-describedby={errors.organization ? 'org-error' : undefined} />
                  {errors.organization && <p id="org-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.organization}</p>}
                </div>

                <div style={{ marginBottom: 22 }}>
                  <label htmlFor="role" style={labelStyle}>Role / Title</label>
                  <input id="role" name="role" type="text" value={values.role} onChange={handleChange} style={fieldStyle} />
                </div>

                <div style={{ marginBottom: 22 }}>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" value={values.email} onChange={handleChange} style={fieldStyle} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
                  {errors.email && <p id="email-error" style={{ color: 'var(--gold-bright)', fontSize: 13, marginTop: 6 }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: 32 }}>
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
      <style>{`@media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
