import './globals.css';
import Navbar from '../components/Navbar'; // 상대 경로 맞게 확인하세요
import type { ReactNode } from 'react';    // ✅ 추가

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}