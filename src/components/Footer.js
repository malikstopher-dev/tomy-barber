'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const logoSrc = `/images/logo-${locale}.svg`;

  const s1 = locale === 'fr' ? 'Coupe Homme' : locale === 'pt' ? 'Corte Masculino' : "Men's Haircut";
  const s2 = locale === 'fr' ? 'Taille de Barbe' : locale === 'pt' ? 'Barba' : 'Beard Grooming';
  const s3 = locale === 'fr' ? 'Rasage & Soins' : locale === 'pt' ? 'Barbear & Cuidados' : 'Shave & Care';
  const homeLabel = locale === 'fr' ? 'Accueil' : locale === 'pt' ? 'Início' : 'Home';
  const servicesLabel = locale === 'fr' ? 'Services' : locale === 'pt' ? 'Serviços' : 'Services';
  const contactLabel = locale === 'fr' ? 'Contact' : locale === 'pt' ? 'Contato' : 'Contact';

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Image
              src={logoSrc}
              alt="TOMY Barber"
              width={200}
              height={40}
              className="h-10 md:h-12 w-auto mb-3"
            />
            <p className="text-gray-400 italic">{t('tagline')}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-gold">{t('services')}</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">{s1}</span></li>
              <li><span className="text-gray-300 text-sm">{s2}</span></li>
              <li><span className="text-gray-300 text-sm">{s3}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-brand-gold">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">{homeLabel}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">{servicesLabel}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">{contactLabel}</Link></li>
              <li>
                <a href="https://tomy-global-services.vercel.app" target="_blank" rel="noopener noreferrer"
                   className="text-brand-gold hover:underline transition-colors text-sm">
                  {t('backToMain')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-8 text-center text-gray-500 text-sm">
          {t('copyright', { year: new Date().getFullYear() })}
          <div className="mt-1">
            Website by{' '}
            <a href="https://stopher-malik.co.za" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              Stopher Malik
            </a>
            {' & '}
            <a href="https://smk.stopher-malik.co.za" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
              SMK Web Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
