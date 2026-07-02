'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="text-green-700 text-lg font-medium">{t('success')}</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="name" placeholder={t('name')} value={formData.name} onChange={handleChange} required className={inputClass} />
      <input type="email" name="email" placeholder={t('email')} value={formData.email} onChange={handleChange} required className={inputClass} />
      <input type="tel" name="phone" placeholder={t('phone')} value={formData.phone} onChange={handleChange} className={inputClass} />
      <input type="text" name="subject" placeholder={t('subject')} value={formData.subject} onChange={handleChange} className={inputClass} />
      <textarea name="message" placeholder={t('message')} value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} />
      <button type="submit" className="w-full px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg">
        {t('send')}
      </button>
    </form>
  );
}
