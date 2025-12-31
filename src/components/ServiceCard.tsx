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
      className={`relative rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl ${
        highlight
          ? 'bg-gradient-primary text-primary-foreground shadow-xl'
          : 'bg-card border border-border shadow-lg'
      }`}
    >
      {highlight && (
        <div className="absolute inset-0 rounded-3xl bg-card/5 animate-pulse pointer-events-none" />
      )}
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${highlight ? 'bg-card/20' : 'bg-gradient-primary'}`}>
              <Icon className={`w-6 h-6 ${highlight ? 'text-primary-foreground' : 'text-primary-foreground'}`} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                {title}
              </h3>
              {subtitle && (
                <p className={`text-sm ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {price && (
            <div className={`px-4 py-2 rounded-full font-bold text-sm ${
              highlight 
                ? 'bg-card text-foreground' 
                : 'bg-gradient-primary text-primary-foreground'
            }`}>
              {price}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};
