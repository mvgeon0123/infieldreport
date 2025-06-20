import './globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar /> {/* ✅ 여기에 한번만 삽입 */}
        <main>{children}</main>
      </body>
    </html>
  );
}