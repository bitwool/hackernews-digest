export interface Comment {
    comments: string[];
}

export interface Article {
    id: number
    title: string;
    digest: string;
    type: string;
    comments: Comment;
    query_date: string;
}

export interface DailyArticles {
    date: string;
    articles: Article[];
}