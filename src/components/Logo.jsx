export default function Logo({ variant = 'light', withWordmark = true, size = 38 }) {
  const ink = variant === 'light' ? '#FAF7EF' : '#0B0B0B';
  const gold = '#C8A24A';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="46" height="46" stroke={gold} strokeWidth="1.5" />
        <path d="M12 36V12H16.5L29 29.5V12H33V36H28.5L16 18.5V36H12Z" fill={gold} />
        <circle cx="24" cy="24" r="1.5" fill={gold} opacity="0" />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: 19,
            letterSpacing: '0.01em',
            color: ink,
            lineHeight: 1,
          }}
        >
          StrategEASE
        </span>
      )}
    </div>
  );
}
