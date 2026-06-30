import logoDark from '../assets/logo/logo-dark-bg.png';
import logoLight from '../assets/logo/logo-light-bg.png';

export default function Logo({ variant = 'light', height = 46 }) {
  // variant 'light' = logo built for use on dark/ink backgrounds (paper-colored wordmark)
  // variant 'dark'  = logo built for use on light/cream backgrounds (ink-colored wordmark)
  const src = variant === 'light' ? logoDark : logoLight;

  return (
    <img
      src={src}
      alt="StrategEASE"
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
