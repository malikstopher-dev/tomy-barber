'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (locale) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <div className="flex gap-1 items-center ml-4 pl-4 border-l border-gray-600">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchTo(lang.code)}
          disabled={isPending}
          className="px-2 py-1 text-xs font-bold uppercase tracking-wider transition-colors hover:text-brand-gold disabled:opacity-50"
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
