import { ReactNode, useState } from 'react';
import { LucideIcon, ChevronDown, Star } from 'lucide-react';

interface ServiceAccordionProps {
  title: string;
  icon: LucideIcon;
  price?: string;
  subtitle?: string;
  highlight?: boolean;
  children: ReactNode;
  defaultOpen?: boolean;
}

export const ServiceAccordion = ({ 
  title, 
  icon: Icon, 
  price, 
  subtitle, 
  highlight, 
  children,
  defaultOpen = false 
}: ServiceAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
        highlight
          ? 'bg-gradient-primary text-primary-foreground shadow-xl'
          : 'bg-card border border-border shadow-md hover:shadow-lg'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${highlight ? 'bg-card/20' : 'bg-primary/10'}`}>
            <Icon className={`w-5 h-5 ${highlight ? 'text-primary-foreground' : 'text-primary'}`} />
          </div>
          <div className="text-left">
            <h3 className={`text-lg font-bold ${highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`text-sm mt-0.5 ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {subtitle}
              </p>
            )}
            {price && (
              <div className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                highlight 
                  ? 'bg-card/20 text-primary-foreground' 
                  : 'bg-primary/10 text-primary'
              }`}>
                <Star className="w-3.5 h-3.5" />
                {price}
              </div>
            )}
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          } ${highlight ? 'text-primary-foreground' : 'text-muted-foreground'}`} 
        />
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-5 pb-5 pt-0 ${highlight ? 'text-primary-foreground' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
