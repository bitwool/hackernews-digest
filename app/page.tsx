"use client";

import { useState } from 'react';

import ArticleList from '../components/ArticleList';
import Sidebar from '../components/Sidebar';

export default function Page() {
  const [selectedDate, setSelectedDate] = useState("2023-09-23");

  return (
    <div className="flex flex-row h-screen">
      <Sidebar onDateChange={setSelectedDate} />
      <main className="flex-1 p-4 overflow-y-auto">
        <ArticleList initialDate={selectedDate} />
      </main>
    </div>
  );
}
