import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={cn('min-h-screen font-sans antialiased grainy')}>
      {children}
    </section>
  );
}
