"use client";

import { useSearchParams } from 'next/navigation';

import { articles } from '../data/articles';

export default function ArticleList({ initialDate }: { initialDate: string }) {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || initialDate;

  const dailyArticles = articles[date] || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hot Articles for {date}</h1>
      {dailyArticles.map((article) => (
        <div key={article.id} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.summary}</p>
        </div>
      ))}
    </div>
  );
}
