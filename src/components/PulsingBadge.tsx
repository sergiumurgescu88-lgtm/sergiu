import { ReactNode } from 'react';

interface PulsingBadgeProps {
  children: ReactNode;
  color: 'blue' | 'purple' | 'green';
}

const colorStyles = {
  blue: 'bg-primary/10 text-primary border-primary/20',
  purple: 'bg-secondary/10 text-secondary border-secondary/20',
  green: 'bg-success/10 text-success border-success/20',
};

const pulseStyles = {
  blue: 'bg-primary',
  purple: 'bg-secondary',
  green: 'bg-success',
};

export const PulsingBadge = ({ children, color }: PulsingBadgeProps) => {
  return (
    <div className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${colorStyles[color]}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseStyles[color]}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${pulseStyles[color]}`} />
      </span>
      {children}
    </div>
  );
};
