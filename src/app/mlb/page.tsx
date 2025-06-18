'use client';
import { posts } from '@/data/posts';

export default function MLBPage() {
  const filtered = posts.filter(p => p.category === 'mlb');

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">MLB Columns</h1>
      {filtered.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map(post => (
            <li key={post.id} className="border-b pb-4">
              <a href={`/mlb/${post.id}`} className="text-xl font-semibold text-blue-700 hover:underline">
                {post.title}
              </a>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-1 text-gray-700">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}