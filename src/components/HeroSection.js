'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl">
          <div className="inline-block px-4 py-1.5 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
            TOMY Global Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
            {t('headline')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            {t('subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-center shadow-lg shadow-brand-gold/25"
            >
              {t('cta1')}
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-300 text-center backdrop-blur-sm"
            >
              {t('cta2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
