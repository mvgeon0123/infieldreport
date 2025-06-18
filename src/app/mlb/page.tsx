'use client';
import { posts } from '@/data/posts';

export default function MLBPage() {
  const filtered = posts.filter(p => p.category === 'mlb');

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">MLB Columns</h1>
      {filtered.map(post => (
        <div key={post.id} className="mb-6 border-b pb-4">
          <img src={post.image} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
      ))}
    </main>
  );
}