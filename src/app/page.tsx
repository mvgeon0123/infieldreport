'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Infield Report</h1>
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-300">MLB</a>
          <a href="#" className="hover:text-gray-300">KBO</a>
          <a href="#" className="hover:text-gray-300">Baseball</a>
          <a href="#" className="hover:text-gray-300">Forum</a>
        </div>
      </nav>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 max-w-7xl mx-auto">
        <div className="md:col-span-2">
          <img
            src="https://source.unsplash.com/800x400/?baseball"
            alt="Main feature"
            className="w-full h-64 object-cover rounded"
          />
          <h2 className="text-2xl font-bold mt-4">MLB Trade Deadline: Top 30 Players</h2>
          <p className="text-gray-600 mt-2">
            Who&rsquo;s most likely to be moved before the deadline? Our experts break it down by team, contract, and value.
          </p>
        </div>

        <aside>
          <h3 className="text-lg font-semibold mb-4">HEADLINES</h3>
          <ul className="space-y-3 text-sm text-gray-800">
            <li className="border-b pb-2">⚾ Shohei Ohtani tops 100 mph in latest start</li>
            <li className="border-b pb-2">📣 KBO MVP Lee Jung-hoo speaks out on injury return</li>
            <li className="border-b pb-2">🔥 Yankees on 6-game win streak behind Judge</li>
            <li className="border-b pb-2">🧢 Who&rsquo;s out at HR Derby 2025? Early projections</li>
            <li className="border-b pb-2">📊 WAR vs OPS+: What&rsquo;s more important?</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}