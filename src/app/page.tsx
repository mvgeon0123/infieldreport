'use client';

import Image from 'next/image';
import { posts } from '@/data/posts';

export default function Home() {
  const latest = posts[0];
  const others = posts.slice(1, 5);
  const headlines = [
    'Orioles IF dies in jet ski accident',
    'Ohtani, Tatis spark fight',
    'Devers open to 1B',
    'Shohei tops 100mph',
  ];

  return (
    <main className="bg-white text-gray-900 font-sans px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mt-10 mb-6 border-b pb-2">Latest Columns</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 메인 기사 */}
        <div className="md:col-span-2">
          <div className="bg-gray-100 rounded overflow-hidden">
            <div className="relative w-full h-72">
              <Image
                src={latest.image}
                alt={latest.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{latest.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{latest.excerpt}</p>
            </div>
          </div>
        </div>

        {/* 사이드 칼럼 */}
        <div className="space-y-5">
          {others.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="text-sm">
                <h3 className="font-semibold leading-tight">{post.title}</h3>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 헤드라인 */}
      <div className="mt-10 md:mt-14">
        <h4 className="font-bold text-sm mb-2 tracking-wide">HEADLINES</h4>
        <ul className="space-y-2 text-sm">
          {headlines.map((line, i) => (
            <li key={i} className="border-b pb-1">{line}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}