import { posts } from '@/data/posts';
import Image from 'next/image';

export default function Home() {
  const latest = posts[0];
  const others = posts.slice(1, 3);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Columns</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Main */}
        <div className="md:col-span-2 bg-white text-black rounded p-4">
          <Image src={latest.image} alt={latest.title} width={800} height={400} className="rounded" />
          <h2 className="mt-4 text-xl font-bold">{latest.title}</h2>
          <p>{latest.excerpt}</p>
        </div>
        {/* Others */}
        <div className="space-y-4">
          {others.map(post => (
            <div key={post.id} className="text-sm">
              <Image src={post.image} alt="thumb" width={60} height={60} className="rounded" />
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
