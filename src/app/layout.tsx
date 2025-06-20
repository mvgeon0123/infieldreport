'use client';

import '../globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}