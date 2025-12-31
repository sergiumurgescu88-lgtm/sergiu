import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 bg-card/95 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-border">
        <Globe className="w-4 h-4 text-muted-foreground ml-2" />
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
            language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <span className="text-sm">🇺🇸</span>
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
            language === 'es'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <span className="text-sm">🇪🇸</span>
          ES
        </button>
        <button
          onClick={() => setLanguage('ro')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
            language === 'ro'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <span className="text-sm">🇷🇴</span>
          RO
        </button>
      </div>
    </div>
  );
};
