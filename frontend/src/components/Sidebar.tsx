import React from "react";

interface SidebarProps {
  dates: string[];
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

export default function Sidebar({
  dates,
  selectedDate,
  onDateSelect,
}: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <h2 className="text-xl font-semibold mb-4">News Dates</h2>
        <ul>
          {dates.map((date) => (
            <li key={date} className="mb-2">
              <button
                onClick={() => onDateSelect(date)}
                className={`w-full text-left px-4 py-2 rounded ${
                  selectedDate === date
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {date}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
