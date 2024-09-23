"use client";

import { useState } from 'react';

import Link from 'next/link';

const dates = [
  "2023-09-23",
  "2023-09-22",
  "2023-09-21",
  "2023-09-20",
  "2023-09-19",
];

export default function Sidebar() {
  const [activeDate, setActiveDate] = useState(dates[0]);

  return (
    <aside className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <nav>
        <ul>
          {dates.map((date) => (
            <li key={date} className="mb-2">
              <Link
                href={`/?date=${date}`}
                className={`block p-2 rounded ${
                  activeDate === date
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveDate(date)}
              >
                {date}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
