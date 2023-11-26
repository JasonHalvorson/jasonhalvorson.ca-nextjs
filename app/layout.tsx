import Sidenav from '@/components/Sidenav/Sidenav';
import { Metadata } from 'next';

import '@/public/main.css';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';

export const metadata: Metadata = {
  title: 'Jason Halvorson | Home',
  description: 'Full-Stack Software Engineer',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className="h-full bg-gray-100" lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Sidenav>{children}</Sidenav>
        </ThemeProvider>
      </body>
    </html>
  );
}
