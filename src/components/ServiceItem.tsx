import { Check, LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  text: string;
  icon?: LucideIcon;
}

export const ServiceItem = ({ text, icon: Icon }: ServiceItemProps) => {
  const IconComponent = Icon || Check;
  
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <IconComponent className="w-3 h-3 text-success" />
      </div>
      <span className="text-sm leading-relaxed">{text}</span>
    </div>
  );
};
