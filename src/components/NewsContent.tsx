import React from "react";

import { NewsItem } from "../types";

interface NewsContentProps {
  selectedDate: string;
  news: NewsItem[];
}

export default function NewsContent({ selectedDate, news }: NewsContentProps) {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <h1 className="text-3xl font-bold mb-6">News for {selectedDate}</h1>
      <div className="space-y-6">
        {news.map((newsItem: NewsItem) => (
          <div key={newsItem.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{newsItem.title}</h2>
            <p className="text-gray-600">{newsItem.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
