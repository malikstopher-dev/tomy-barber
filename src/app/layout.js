import '../globals.css';

export const metadata = {
  title: 'TOMY Barber — Coupe & Style Premium',
  description: 'Professional barber services — haircuts, beard grooming, hot towel shave and styling.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
