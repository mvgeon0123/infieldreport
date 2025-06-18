'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <Link href="/" className="text-xl font-bold text-white hover:text-blue-400">
      Infield Report
    </Link>
    <div className="space-x-6 text-sm font-medium text-white">
      <Link href="/mlb" className="hover:text-blue-400">MLB</Link>
      <Link href="/kbo" className="hover:text-blue-400">KBO</Link>
      <Link href="/baseball" className="hover:text-blue-400">Baseball</Link>
      <Link href="/forum" className="hover:text-blue-400">Forum</Link>
    </div>
  </div>
</nav>
  );
}