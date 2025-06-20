'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Infield Report
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/mlb" className="hover:text-blue-400">MLB</Link>
          <Link href="/kbo" className="hover:text-blue-400">KBO</Link>
          <Link href="/baseball" className="hover:text-blue-400">Baseball</Link>
          <Link href="/forum" className="hover:text-blue-400">Forum</Link>
        </div>
      </div>
    </nav>
  );
}