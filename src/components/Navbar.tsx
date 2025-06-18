'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between">
      <Link href="/" className="text-xl font-bold text-black">Infield Report</Link>
      <div className="space-x-6 text-sm font-medium text-gray-700">
        <Link href="/mlb">MLB</Link>
        <Link href="/kbo">KBO</Link>
        <Link href="/baseball">Baseball</Link>
        <Link href="/forum">Forum</Link>
      </div>
    </nav>
  );
}