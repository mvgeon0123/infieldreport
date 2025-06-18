'use client';
import { posts } from '@/data/posts';

export default function Home() {
  const latest = posts[0]; // 가장 최신 글
  const others = posts.slice(1, 5); // 나머지 짧은 칼럼
  const headlines = [
    'Orioles IF dies in jet ski accident',
    'Ohtani, Tatis spark fight',
    'Devers open to 1B',
    'Shohei tops 100mph',
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: Main Article */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">MLB</h2>
        <img
          src={latest.image}
          alt={latest.title}
          className="w-full h-64 object-cover rounded"
        />
        <h3 className="text-xl font-bold mt-4">{latest.title}</h3>
        <p className="text-gray-600 mt-1">{latest.excerpt}</p>
      </div>

      {/* Middle: Short List */}
      <div className="space-y-4">
        {others.map(post => (
          <div key={post.id} className="flex gap-3 items-start">
            <img src={post.image} alt="" className="w-16 h-16 object-cover rounded" />
            <div>
              <p className="font-semibold text-sm">{post.title}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Headlines */}
      <div>
        <h4 className="font-bold mb-2">HEADLINES</h4>
        <ul className="space-y-2 text-sm">
          {headlines.map((h, i) => (
            <li key={i} className="border-b pb-1">{h}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}