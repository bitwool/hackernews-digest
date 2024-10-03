export interface Article {
    id: string;
    title: string;
    summary: string;
    comments: string[];
    date: string;
}

export interface DailyArticles {
    date: string;
    articles: Article[];
}