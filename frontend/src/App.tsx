import React, { useState } from "react";

import NewsContent from "./components/NewsContent";
import Sidebar from "./components/Sidebar";
import { testData } from "./testData";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(testData[0].date);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const selectedNews =
    testData.find((item) => item.date === selectedDate)?.articles || [];
  const dates = testData.map((item) => item.date);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        dates={dates}
        selectedDate={selectedDate}
        onDateSelect={handleDateClick}
      />
      <NewsContent selectedDate={selectedDate} articles={selectedNews} />
    </div>
  );
}
