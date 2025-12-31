import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  price?: string;
  subtitle?: string;
  highlight?: boolean;
  children: ReactNode;
}

export const ServiceCard = ({ title, icon: Icon, price, subtitle, highlight, children }: ServiceCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-6 transition-all duration-300 ${
        highlight
          ? 'bg-gradient-primary text-primary-foreground shadow-xl'
          : 'bg-card border border-border shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${highlight ? 'bg-card/20' : 'bg-primary/10'}`}>
            <Icon className={`w-5 h-5 ${highlight ? 'text-primary-foreground' : 'text-primary'}`} />
          </div>
          <div>
            <h3 className={`text-lg font-bold ${highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`text-sm ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};
