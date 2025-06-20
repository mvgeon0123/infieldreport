'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black hover:text-blue-600">
          Infield Report
        </Link>
        <div className="space-x-6 text-sm font-medium text-gray-700">
          <Link href="/mlb" className="hover:text-blue-600">MLB</Link>
          <Link href="/kbo" className="hover:text-blue-600">KBO</Link>
          <Link href="/baseball" className="hover:text-blue-600">Baseball</Link>
          <Link href="/forum" className="hover:text-blue-600">Forum</Link>
        </div>
      </div>
    </nav>
  );
}