import React, { useState } from "react";

import { Article } from "../types";

interface NewsContentProps {
  selectedDate: string;
  articles: Article[];
}

export default function NewsContent({
  selectedDate,
  articles: articles,
}: NewsContentProps) {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <h1 className="text-3xl font-bold mb-6">News for {selectedDate}</h1>
      <div className="space-y-6">
        {articles.map((article: Article) => (
          <div key={article.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.summary}</p>
            <Comments comments={article.comments} />
          </div>
        ))}
      </div>
    </main>
  );
}

interface CommentsProps {
  comments: string[];
}

function Comments({ comments }: CommentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="text-blue-500"
      >
        {isCollapsed ? "Show Comments" : "Hide Comments"}
      </button>
      {!isCollapsed && (
        <ul className="mt-2 space-y-2">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-700">
              {comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
