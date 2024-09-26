export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
}

export interface DailyNews {
    date: string;
    news: NewsItem[];
}