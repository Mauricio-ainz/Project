import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RAFINOLE | Produção',
  description: 'Sistema de gestão e controlo da produção RAFINOLE',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
