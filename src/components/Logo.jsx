import logoSvg from '../assets/logo/strategease-primary-dark.svg';

export default function Logo({ height = 46 }) {
  return (
    <img
      src={logoSvg}
      alt="StrategEASE"
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
