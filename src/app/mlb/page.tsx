'use client';
import { useEffect, useState } from 'react';
import { posts } from '@/data/posts';

export default function MLBPage() {
  const [mlbPosts, setMlbPosts] = useState<any[]>([]);

  useEffect(() => {
    setMlbPosts(posts.filter(p => p.category === 'mlb'));
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">MLB 게시판</h1>
      {mlbPosts.map(post => (
        <div key={post.id} className="border-b py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-400 text-sm">{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </main>
  );
}
