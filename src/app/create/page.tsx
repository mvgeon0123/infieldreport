'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreatePostPage() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: 'mlb',
    image: null,
    file: null,
  });

  const [preview, setPreview] = useState({ imageUrl: '', fileName: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: form.title,
      content: form.content,
      category: form.category,
      imageUrl: preview.imageUrl,
      fileName: preview.fileName,
    };

    const existing = JSON.parse(localStorage.getItem('posts') || '[]');
    const updated = [newPost, ...existing];
    localStorage.setItem('posts', JSON.stringify(updated));

    alert('작성 완료!');
    setForm({ title: '', content: '', category: 'mlb', image: null, file: null });
    setPreview({ imageUrl: '', fileName: '' });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 bg-white">
      <nav className="mb-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black">Infield Report</Link>
        <div className="space-x-4">
          <Link href="/mlb" className="text-sm font-medium">MLB</Link>
          <Link href="/kbo" className="text-sm font-medium">KBO</Link>
          <Link href="/baseball" className="text-sm font-medium">Baseball</Link>
          <Link href="/forum" className="text-sm font-medium">Forum</Link>
        </div>
      </nav>

      <h1 className="text-2xl font-bold mb-6">글 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">제목</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">카테고리</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border px-4 py-2"
          >
            <option value="mlb">MLB</option>
            <option value="kbo">KBO</option>
            <option value="baseball">Baseball</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">본문</label>
          <textarea
            required
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full border px-4 py-2 h-48"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">이미지 업로드</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setForm({ ...form, image: file });
                  setPreview({ ...preview, imageUrl: URL.createObjectURL(file) });
                }
              }}
            />
            {preview.imageUrl && (
              <img
                src={preview.imageUrl}
                alt="미리보기"
                className="mt-3 w-full max-h-64 object-cover border"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">파일 첨부</label>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setForm({ ...form, file: file });
                  setPreview({ ...preview, fileName: file.name });
                }
              }}
            />
            {preview.fileName && (
              <p className="mt-2 text-sm text-gray-600">첨부된 파일: {preview.fileName}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          게시하기
        </button>
      </form>
    </main>
  );
}
