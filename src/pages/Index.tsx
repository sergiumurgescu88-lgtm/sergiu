import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ServiceAccordion } from '@/components/ServiceAccordion';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceItem } from '@/components/ServiceItem';
import { PulsingBadge } from '@/components/PulsingBadge';
import { getWhatsAppUrl, getPhoneUrl } from '@/i18n/translations';
import {
  Zap,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Video,
  Clock,
  ShoppingBag,
  Calendar,
  Award,
  Megaphone,
  Globe,
  Phone,
  Users,
  Star,
  Heart,
} from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'existente' | 'ai'>('existente');

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-60 h-60 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
      </div>

      <LanguageSwitcher />

      <div className="max-w-3xl mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-10 pt-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gradient-primary mb-4">
            {t.siteName}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium px-4 max-w-2xl mx-auto leading-relaxed">
            {t.tagline}
          </p>
          <div className="flex justify-center gap-2 sm:gap-3 mt-5 flex-wrap px-2">
            <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
            <PulsingBadge color="purple">{t.badges.apps}</PulsingBadge>
            <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab('existente')}
            className={`flex-1 px-4 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'existente'
                ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                : 'bg-card text-muted-foreground hover:shadow-md border border-border hover:border-primary/30'
            }`}
          >
            <Zap className="w-4 h-4" />
            {t.tabs.current}
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 px-4 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'ai'
                ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                : 'bg-card text-muted-foreground hover:shadow-md border border-border hover:border-primary/30'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {t.tabs.ai}
          </button>
        </nav>

        {/* Current Services Tab */}
        {activeTab === 'existente' && (
          <main className="space-y-4">
            {/* Standard Package */}
            <ServiceAccordion 
              title={t.services.standard.title} 
              icon={TrendingUp} 
              price={t.services.standard.price} 
              subtitle={t.services.standard.subtitle}
            >
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{t.services.standard.support}</span>
                </div>
              </div>
              {t.services.standard.items.map((item, index) => (
                <ServiceItem
                  key={index}
                  text={item}
                  icon={[ShoppingBag, Calendar, TrendingUp, Zap, Award, Megaphone, Clock, Globe, MessageSquare][index]}
                />
              ))}
            </ServiceAccordion>

            {/* AI Agents */}
            <ServiceAccordion 
              title={t.services.aiAgents.title} 
              icon={MessageSquare} 
              price={t.services.aiAgents.price} 
              subtitle={t.services.aiAgents.subtitle}
            >
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-foreground">{t.services.aiAgents.badge}</span>
                </div>
              </div>

              {/* Phone Section */}
              <div className="bg-primary/5 p-5 rounded-xl mb-4 border border-primary/15">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-primary rounded-lg">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {t.services.aiAgents.phone.title}
                </h4>
                {t.services.aiAgents.phone.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* WhatsApp Section */}
              <div className="bg-success/5 p-5 rounded-xl mb-4 border border-success/15">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-success rounded-lg">
                    <MessageSquare className="w-4 h-4 text-success-foreground" />
                  </div>
                  {t.services.aiAgents.whatsapp.title}
                </h4>
                {t.services.aiAgents.whatsapp.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* Reservations Section */}
              <div className="bg-secondary/5 p-5 rounded-xl mb-4 border border-secondary/15">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-secondary rounded-lg">
                    <Calendar className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  {t.services.aiAgents.reservations.title}
                </h4>
                {t.services.aiAgents.reservations.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-warning/10 p-4 rounded-xl border border-warning/20">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-medium">
                    <strong>Benefits:</strong> {t.services.aiAgents.benefits}
                  </p>
                </div>
              </div>
            </ServiceAccordion>

            {/* Video Premium */}
            <ServiceAccordion 
              title={t.services.video.title} 
              icon={Video} 
              price={t.services.video.price} 
              subtitle={t.services.video.subtitle} 
              highlight
            >
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card/20 px-4 py-2 rounded-full">
                  <Video className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-semibold text-primary-foreground">{t.services.video.badge}</span>
                </div>
              </div>

              <div className="bg-card/10 p-5 rounded-xl mb-4 border border-card/20">
                <h4 className="font-bold text-base text-primary-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-card/20 rounded-lg">
                    <Video className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {t.services.video.videosTitle}
                </h4>
                <p className="text-sm text-primary-foreground/80 font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {t.services.video.videoDesc}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-card/10 p-3 rounded-lg">
                    <div className="w-7 h-7 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 text-destructive-foreground" />
                    </div>
                    <span className="text-sm text-primary-foreground">
                      <strong>{t.services.video.hook}</strong> - {t.services.video.hookDesc}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/10 p-3 rounded-lg">
                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-primary-foreground">
                      <strong>{t.services.video.action}</strong> - {t.services.video.actionDesc}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-card/10 p-3 rounded-lg">
                    <div className="w-7 h-7 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-3.5 h-3.5 text-success-foreground" />
                    </div>
                    <span className="text-sm text-primary-foreground">
                      <strong>{t.services.video.cta}</strong> - {t.services.video.ctaDesc}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-card/15 p-4 rounded-xl border border-card/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                    <h5 className="font-bold text-sm text-primary-foreground">{t.services.video.veo3}</h5>
                  </div>
                  <p className="text-xs text-primary-foreground/80">{t.services.video.veo3Desc}</p>
                </div>
                <div className="bg-card/15 p-4 rounded-xl border border-card/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-primary-foreground" />
                    <h5 className="font-bold text-sm text-primary-foreground">{t.services.video.format}</h5>
                  </div>
                  <p className="text-xs text-primary-foreground/80">{t.services.video.formatDesc}</p>
                </div>
              </div>

              {t.services.video.items.map((item, index) => (
                <ServiceItem
                  key={index}
                  text={item}
                  icon={[Star, Users, Zap, Megaphone, Video, Award, TrendingUp, Globe][index]}
                  highlight
                />
              ))}

              <div className="mt-4 p-4 bg-warning/20 rounded-xl border border-warning/30">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5 animate-pulse" />
                  <p className="text-sm text-primary-foreground font-medium">
                    <strong>🎥 Content examples:</strong> {t.services.video.examples}
                  </p>
                </div>
              </div>
            </ServiceAccordion>

            {/* Premium Package */}
            <ServiceAccordion 
              title={t.services.premium.title} 
              icon={Sparkles} 
              price={t.services.premium.price} 
              subtitle={t.services.premium.subtitle} 
              highlight
            >
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card/20 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-warning" />
                  <span className="text-sm font-semibold text-primary-foreground">{t.services.premium.badge}</span>
                </div>
              </div>

              {/* Automation Section */}
              <div className="bg-card/10 p-5 rounded-xl mb-4 border border-card/20">
                <h4 className="font-bold text-base text-primary-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-card/20 rounded-lg">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {t.services.premium.automation.title}
                </h4>
                {t.services.premium.automation.items.map((item, index) => (
                  <ServiceItem key={index} text={item} highlight />
                ))}
              </div>

              {/* App Development Section */}
              <div className="bg-card/10 p-5 rounded-xl mb-4 border border-card/20">
                <h4 className="font-bold text-base text-primary-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-card/20 rounded-lg">
                    <Globe className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {t.services.premium.app.title}
                </h4>
                {t.services.premium.app.items.map((item, index) => (
                  <ServiceItem key={index} text={item} highlight />
                ))}
              </div>

              {/* Social Media Section */}
              <div className="bg-card/10 p-5 rounded-xl border border-card/20">
                <h4 className="font-bold text-base text-primary-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-card/20 rounded-lg">
                    <Megaphone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {t.services.premium.social.title}
                </h4>
                {t.services.premium.social.items.map((item, index) => (
                  <ServiceItem key={index} text={item} highlight />
                ))}
              </div>
            </ServiceAccordion>
          </main>
        )}

        {/* AI Services Tab */}
        {activeTab === 'ai' && (
          <main className="space-y-4">
            {/* Header Banner */}
            <div className="bg-gradient-primary text-primary-foreground p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-card/5 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">{t.aiServices.header}</h2>
                <p className="text-base opacity-95 text-center font-medium">{t.aiServices.subtitle}</p>
              </div>
            </div>

            <ServiceCard title={t.aiServices.pricing} icon={TrendingUp}>
              {t.aiServices.pricingItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Zap, Star, Clock, TrendingUp][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.recommendations} icon={Users}>
              {t.aiServices.recommendationsItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Heart, ShoppingBag, Sparkles, TrendingUp][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.chatbot} icon={MessageSquare}>
              {t.aiServices.chatbotItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Globe, Clock, Zap, Users][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.stock} icon={Calendar}>
              {t.aiServices.stockItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[TrendingUp, Globe, Award, Zap][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.routes} icon={Globe}>
              {t.aiServices.routesItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Zap, Users, Clock, Star][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.sentiment} icon={MessageSquare}>
              {t.aiServices.sentimentItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Globe, TrendingUp, MessageSquare, Star][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.content} icon={Sparkles}>
              {t.aiServices.contentItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Megaphone, Globe, MessageSquare, Star][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.competitive} icon={TrendingUp}>
              {t.aiServices.competitiveItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Globe, Star, Award, Zap][index]} />
              ))}
            </ServiceCard>

            {/* Modular Note */}
            <div className="bg-success/10 p-4 rounded-xl border border-success/20">
              <h3 className="text-base font-bold text-foreground mb-2">{t.aiServices.modular}</h3>
              <p className="text-sm text-muted-foreground">{t.aiServices.modularDesc}</p>
            </div>
          </main>
        )}

        {/* Footer CTA */}
        <footer className="mt-8 bg-gradient-primary text-primary-foreground p-6 rounded-2xl text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{t.footer.title}</h2>
          <p className="text-sm sm:text-base mb-5 opacity-90">{t.footer.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success text-success-foreground px-6 py-3 rounded-lg font-semibold hover:bg-success/90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              {t.footer.whatsapp}
            </a>
            <a
              href={getPhoneUrl()}
              className="bg-card text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              {t.footer.call}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
