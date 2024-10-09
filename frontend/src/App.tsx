import { useEffect, useState } from "react";

import NewsContent from "./components/NewsContent";
import Sidebar from "./components/Sidebar";
import { Article, DailyArticles } from "./types";

export default function App() {
  const [testData, setTestData] = useState<DailyArticles[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/articles")
      .then((response) => response.json())
      .then((data) => {
        // get data property from data
        const data_list = data.data;
        // data_list是一个数组，每个元素是一个Article对象， 遍历datalist 按照query_date分组 转换成DailyArticles数组
        const dailyArticles: DailyArticles[] = data_list.reduce(
          (acc: DailyArticles[], article: Article) => {
            const date = article.query_date;
            const existingDate = acc.find((item) => item.date === date);
            if (existingDate) {
              existingDate.articles.push(article);
            } else {
              acc.push({ date, articles: [article] });
            }
            return acc;
          },
          []
        );
        setTestData(dailyArticles);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDateClick = (query_date: string) => {
    setSelectedDate(query_date);
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
