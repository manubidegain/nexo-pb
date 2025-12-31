"use client";

import { useState } from "react";
import Image from "next/image";

interface NewsletterEntry {
  timestamp: string;
  name: string;
  email: string;
  language: string;
}

export default function WaitlistAdmin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [entries, setEntries] = useState<NewsletterEntry[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/newsletter/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        setEntries(data.entries);
        setIsAuthenticated(true);
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Timestamp', 'Name', 'Email', 'Language'],
      ...entries.map(entry => [
        new Date(entry.timestamp).toLocaleString(),
        entry.name,
        entry.email,
        entry.language
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nexo-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-nexo-dark flex items-center justify-center px-8">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Nexo Pickleball"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-nexo-dark mb-6 text-center">
            Waitlist Admin
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-nexo-cyan focus:outline-none mb-4"
              required
            />
            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-nexo-cyan text-white py-3 rounded-lg font-bold hover:bg-nexo-dark transition-all disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Access Waitlist'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Nexo Pickleball"
              width={120}
              height={60}
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold text-nexo-dark">Waitlist Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">
              {entries.length} {entries.length === 1 ? 'subscriber' : 'subscribers'}
            </span>
            <button
              onClick={exportToCSV}
              className="bg-nexo-lime text-nexo-dark px-6 py-2 rounded-lg font-bold hover:bg-nexo-cyan hover:text-white transition-all"
            >
              Export CSV
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {entries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No subscribers yet</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-nexo-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">#</th>
                  <th className="px-6 py-4 text-left font-bold">Name</th>
                  <th className="px-6 py-4 text-left font-bold">Email</th>
                  <th className="px-6 py-4 text-left font-bold">Language</th>
                  <th className="px-6 py-4 text-left font-bold">Signed Up</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {entries.map((entry, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {entry.name}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {entry.email}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                        entry.language === 'en' ? 'bg-blue-100 text-blue-800' :
                        entry.language === 'es' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {entry.language.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {new Date(entry.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
