import { DailyNews } from './types';

export const testData: DailyNews[] = [
    {
        date: '2023-05-01',
        news: Array.from({ length: 30 }, (_, i) => ({
            id: `2023-05-01-${i + 1}`,
            title: `News Title ${i + 1} for May 1`,
            summary: `This is a summary for news item ${i + 1} on May 1, 2023. It contains a brief overview of the news story.`,
            date: '2023-05-01'
        }))
    },
    {
        date: '2023-05-02',
        news: Array.from({ length: 30 }, (_, i) => ({
            id: `2023-05-02-${i + 1}`,
            title: `News Title ${i + 1} for May 2`,
            summary: `This is a summary for news item ${i + 1} on May 2, 2023. It contains a brief overview of the news story.`,
            date: '2023-05-02'
        }))
    },
    {
        date: '2023-05-03',
        news: Array.from({ length: 30 }, (_, i) => ({
            id: `2023-05-03-${i + 1}`,
            title: `News Title ${i + 1} for May 3`,
            summary: `This is a summary for news item ${i + 1} on May 3, 2023. It contains a brief overview of the news story.`,
            date: '2023-05-03'
        }))
    },
    {
        date: '2023-05-04',
        news: Array.from({ length: 30 }, (_, i) => ({
            id: `2023-05-04-${i + 1}`,
            title: `News Title ${i + 1} for May 4`,
            summary: `This is a summary for news item ${i + 1} on May 4, 2023. It contains a brief overview of the news story.`,
            date: '2023-05-04'
        }))
    },
    {
        date: '2023-05-05',
        news: Array.from({ length: 30 }, (_, i) => ({
            id: `2023-05-05-${i + 1}`,
            title: `News Title ${i + 1} for May 5`,
            summary: `This is a summary for news item ${i + 1} on May 5, 2023. It contains a brief overview of the news story.`,
            date: '2023-05-05'
        }))
    }
];