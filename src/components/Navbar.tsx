'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 shadow flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">Infield Report</Link>
      <div className="space-x-4 text-sm">
        <Link href="/mlb">MLB</Link>
        <Link href="/kbo">KBO</Link>
        <Link href="/baseball">Baseball</Link>
        <Link href="/forum">Forum</Link>
      </div>
    </nav>
  );
}