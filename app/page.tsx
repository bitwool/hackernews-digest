import ArticleList from "../components/ArticleList";
import Sidebar from "../components/Sidebar";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <ArticleList initialDate="2023-09-23" />
      </main>
    </div>
  );
}
