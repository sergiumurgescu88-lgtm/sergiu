import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-border">
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
            language === 'es'
              ? 'bg-gradient-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="text-base">🇪🇸</span>
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
            language === 'en'
              ? 'bg-gradient-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="text-base">🇺🇸</span>
          EN
        </button>
      </div>
    </div>
  );
};
