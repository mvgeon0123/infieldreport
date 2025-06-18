'use client';
import { posts } from '@/data/posts';

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Columns</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="border-b pb-4">
            <a href={`/${post.category}/${post.id}`} className="text-xl font-semibold text-blue-700 hover:underline">
              {post.title}
            </a>
            <p className="text-sm text-gray-500">{post.date} · {post.category.toUpperCase()}</p>
            <p className="mt-1 text-gray-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}