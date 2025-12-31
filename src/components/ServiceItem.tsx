import { Check, LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  text: string;
  icon?: LucideIcon;
  highlight?: boolean;
}

export const ServiceItem = ({ text, icon: Icon, highlight }: ServiceItemProps) => {
  const IconComponent = Icon || Check;
  
  return (
    <div className="flex items-start gap-3 py-2">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
        highlight ? 'bg-card/20' : 'bg-success/15'
      }`}>
        <IconComponent className={`w-3 h-3 ${highlight ? 'text-primary-foreground' : 'text-success'}`} />
      </div>
      <span className={`text-sm leading-relaxed ${highlight ? 'text-primary-foreground/90' : 'text-foreground'}`}>{text}</span>
    </div>
  );
};
