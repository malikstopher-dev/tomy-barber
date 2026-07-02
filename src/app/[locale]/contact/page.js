'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600 mb-12">{t('subtitle')}</p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <ContactForm />
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-brand-navy mb-6">Informations</h3>
          <div className="space-y-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors">
              <span className="text-2xl">💬</span>
              <span className="font-medium">{t('whatsapp')}</span>
            </a>
            <div className="flex items-center gap-3 text-gray-600">
              <span className="text-2xl">📧</span>
              <span>{t('email')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
