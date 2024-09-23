"use client";

import { articles } from "../lib/articles";

export default function ArticleList({ initialDate }: { initialDate: string }) {
  const date = initialDate;

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
