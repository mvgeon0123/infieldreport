'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MLBPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('posts') || '[]');
    const mlbPosts = stored.filter((post: any) => post.category === 'mlb');
    setPosts(mlbPosts);
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="mb-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black">Infield Report</Link>
        <div className="space-x-4">
          <Link href="/mlb" className="text-sm font-medium">MLB</Link>
          <Link href="/kbo" className="text-sm font-medium">KBO</Link>
          <Link href="/baseball" className="text-sm font-medium">Baseball</Link>
          <Link href="/forum" className="text-sm font-medium">Forum</Link>
        </div>
      </nav>

      <h1 className="text-2xl font-bold mb-6">MLB 게시판</h1>
      {posts.length === 0 ? (
        <p>등록된 글이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border-t pt-4 mt-4">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">📂 카테고리: {post.category.toUpperCase()}</p>
            <p className="text-gray-600 whitespace-pre-wrap">{post.content}</p>
            {post.imageUrl && <img src={post.imageUrl} alt="img" className="mt-2 max-w-full" />}
            {post.fileName && (
              <p className="text-sm text-blue-600 mt-2">📎 첨부 파일: {post.fileName}</p>
            )}
          </div>
        ))
      )}
    </main>
  );
}