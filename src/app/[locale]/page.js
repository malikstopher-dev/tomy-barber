import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import Slideshow from '@/components/Slideshow';

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const slideshowImages = [
    { src: 'https://images.unsplash.com/photo-1596728325488-8d19c6b03c41?w=1200&q=80', caption: locale === 'fr' ? 'Salon moderne' : locale === 'pt' ? 'Salão moderno' : 'Modern barbershop' },
    { src: 'https://images.unsplash.com/photo-1585747874023-71c3a6e7aa71?w=1200&q=80', caption: locale === 'fr' ? 'Coupe précise' : locale === 'pt' ? 'Corte preciso' : 'Precision haircut' },
    { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=80', caption: locale === 'fr' ? 'Style barbe' : locale === 'pt' ? 'Estilo barba' : 'Beard styling' },
    { src: 'https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=1200&q=80', caption: locale === 'fr' ? 'Ambiance détente' : locale === 'pt' ? 'Ambiente relaxante' : 'Relaxing atmosphere' },
    { src: 'https://images.unsplash.com/photo-1503951914875-452cb67b0c7e?w=1200&q=80', caption: locale === 'fr' ? 'Services premium' : locale === 'pt' ? 'Serviços premium' : 'Premium services' },
  ];

  return (
    <>
      <HeroSection />
      <Slideshow images={slideshowImages} title={locale === 'fr' ? 'Notre Galerie' : locale === 'pt' ? 'Nossa Galeria' : 'Our Gallery'} />
      <StatsSection locale={locale} />
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <WhyChooseUsSection locale={locale} />
      <CtaSection locale={locale} />
    </>
  );
}

function StatsSection({ locale }) {
  const stats = [
    { number: '5000+', label: { fr: 'Clients Satisfaits', en: 'Happy Clients', pt: 'Clientes Satisfeitos' } },
    { number: '15+', label: { fr: 'Barbiers Experts', en: 'Expert Barbers', pt: 'Barbeiros Experts' } },
    { number: '10+', label: { fr: "Années d'Excellence", en: 'Years of Excellence', pt: 'Anos de Excelência' } },
    { number: '5', label: { fr: 'Salons Premium', en: 'Premium Salons', pt: 'Salões Premium' } },
  ];
  return (
    <section className="py-12 md:py-16 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label[locale]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function AboutSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'about' });
  const labels = {
    fr: { badge: 'À propos', cert: 'Certifié Premium', cert2: 'Produits Bio' },
    en: { badge: 'About', cert: 'Premium Certified', cert2: 'Organic Products' },
    pt: { badge: 'Sobre', cert: 'Certificado Premium', cert2: 'Produtos Orgânicos' },
  };
  const l = labels[locale] || labels.en;
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">{l.badge}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">{t('title')}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{t('text')}</p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500"><span className="w-2 h-2 bg-brand-gold rounded-full" />{l.cert}</div>
              <div className="flex items-center gap-2 text-sm text-gray-500"><span className="w-2 h-2 bg-brand-gold rounded-full" />{l.cert2}</div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="text-white text-sm font-medium">TOMY Barber — Style & Tradition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function ServicesSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'services' });
  const labels = { fr: 'Services', en: 'Services', pt: 'Serviços' };
  const serviceKeys = ['haircut', 'beard', 'shave', 'styling', 'treatment'];
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">{labels[locale] || labels.en}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {serviceKeys.map((key) => (
            <ServiceCard key={key} serviceKey={key} name={t(`${key}.name`)} description={t(`${key}.desc`)} ctaText={t('cta')} />
          ))}
        </div>
      </div>
    </section>
  );
}

async function WhyChooseUsSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'why' });
  const reasons = t.raw('reasons');
  const icons = ['✂', '⭐', '🧴', '💈'];
  const labels = { fr: 'Pourquoi nous', en: 'Why Us', pt: 'Por que nós' };
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">{labels[locale] || labels.en}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors"><span className="text-2xl">{icons[i]}</span></div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function CtaSection({ locale }) {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'contact' });
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 right-10 w-96 h-96 border border-brand-gold/40 rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-brand-gold/30 rounded-full" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
        <p className="text-lg text-gray-400 mb-10">{t('subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-lg shadow-lg shadow-brand-gold/20">{locale === 'fr' ? 'Réserver' : locale === 'pt' ? 'Reservar' : 'Book Now'}</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-300">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
