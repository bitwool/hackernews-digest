type Article = {
    id: number;
    title: string;
    summary: string;
};

type ArticlesByDate = {
    [date: string]: Article[];
};

export const articles: ArticlesByDate = {
    '2023-09-23': [
        { id: 1, title: "Next.js 14 Released", summary: "Exciting new features in the latest version of Next.js" },
        { id: 2, title: "The Rise of AI in Web Development", summary: "How AI is changing the landscape of web development" },
        { id: 3, title: "TypeScript Best Practices", summary: "Improve your TypeScript code with these best practices" },
        { id: 4, title: "React Server Components Explained", summary: "A deep dive into React Server Components" },
        { id: 5, title: "The Future of CSS", summary: "Upcoming features in CSS that will revolutionize web design" },
        { id: 6, title: "JavaScript Performance Optimization", summary: "Tips and tricks to optimize your JavaScript code" },
        { id: 7, title: "Building Accessible Web Applications", summary: "How to ensure your web apps are accessible to all users" },
        { id: 8, title: "GraphQL vs REST", summary: "Comparing GraphQL and REST APIs for modern web development" },
        { id: 9, title: "Micro Frontends Architecture", summary: "Breaking down monolithic frontends into micro frontends" },
        { id: 10, title: "Web Security Best Practices", summary: "Protecting your web applications from common security threats" },
    ],
    '2023-09-22': [
        { id: 11, title: "Tailwind CSS Tips and Tricks", summary: "Maximizing your productivity with Tailwind CSS" },
        { id: 12, title: "State Management in 2023", summary: "Comparing popular state management solutions for React" },
        { id: 13, title: "WebAssembly and the Future of Web Performance", summary: "How WebAssembly is changing web performance" },
        { id: 14, title: "Serverless Architecture Patterns", summary: "Common patterns in serverless application development" },
        { id: 15, title: "Progressive Web Apps in 2023", summary: "The current state of PWAs and their adoption" },
        { id: 16, title: "Machine Learning in the Browser", summary: "Implementing ML models directly in the browser with TensorFlow.js" },
        { id: 17, title: "The Impact of 5G on Web Development", summary: "How 5G will change the way we build web applications" },
        { id: 18, title: "Micro-animations for Better UX", summary: "Small animations that greatly improve user experience" },
        { id: 19, title: "Web Components in Modern Web Development", summary: "The role of web components in today's web ecosystem" },
        { id: 20, title: "Optimizing Images for the Web", summary: "Techniques to improve image loading and display on websites" },
    ],
    '2023-09-21': [
        { id: 21, title: "The Evolution of JavaScript Frameworks", summary: "Tracing the history and future of JS frameworks" },
        { id: 22, title: "Headless CMS Architecture", summary: "Building flexible content management systems with headless architecture" },
        { id: 23, title: "Web Accessibility Guidelines", summary: "Understanding and implementing WCAG 2.1" },
        { id: 24, title: "Responsive Design in 2023", summary: "Modern techniques for creating responsive layouts" },
        { id: 25, title: "The Role of DevOps in Web Development", summary: "Integrating DevOps practices into web development workflows" },
        { id: 26, title: "Web3 and Decentralized Apps", summary: "An introduction to building dApps on the blockchain" },
        { id: 27, title: "CSS Grid Layout Mastery", summary: "Advanced techniques for layout design with CSS Grid" },
        { id: 28, title: "Real-time Web Applications with WebSockets", summary: "Building real-time features using WebSocket technology" },
        { id: 29, title: "SEO Strategies for Single Page Applications", summary: "Optimizing SPAs for search engine visibility" },
        { id: 30, title: "The Impact of Dark Mode on User Experience", summary: "Implementing and designing for dark mode in web apps" },
    ],
    '2023-09-20': [
        { id: 31, title: "Functional Programming in JavaScript", summary: "Applying functional programming paradigms in JS" },
        { id: 32, title: "Building Design Systems for Web Applications", summary: "Creating consistent and scalable design systems" },
        { id: 33, title: "Web Performance Auditing", summary: "Tools and techniques for auditing web performance" },
        { id: 34, title: "GraphQL Schema Design Best Practices", summary: "Designing efficient and flexible GraphQL schemas" },
        { id: 35, title: "The Future of Web Browsers", summary: "Upcoming features and changes in major web browsers" },
        { id: 36, title: "Micro-frontends with Module Federation", summary: "Implementing micro-frontends using Webpack Module Federation" },
        { id: 37, title: "Web Animations API Deep Dive", summary: "Creating complex animations with the Web Animations API" },
        { id: 38, title: "Serverless Database Solutions", summary: "Comparing serverless database options for web applications" },
        { id: 39, title: "The Role of TypeScript in Large Scale Applications", summary: "How TypeScript improves maintainability in large codebases" },
        { id: 40, title: "Web Monetization API", summary: "Implementing direct web monetization in your applications" },
    ],
    '2023-09-19': [
        { id: 41, title: "CSS-in-JS Solutions Compared", summary: "Analyzing popular CSS-in-JS libraries and their use cases" },
        { id: 42, title: "Building a CI/CD Pipeline for Web Projects", summary: "Setting up continuous integration and deployment for web apps" },
        { id: 43, title: "Web Workers and Parallel Processing in JavaScript", summary: "Utilizing Web Workers for performance-intensive tasks" },
        { id: 44, title: "The Impact of Core Web Vitals on SEO", summary: "How Core Web Vitals affect search engine rankings" },
        { id: 45, title: "Implementing Authentication in Modern Web Apps", summary: "Secure authentication strategies for web applications" },
        { id: 46, title: "Jamstack Architecture and Static Site Generators", summary: "Building fast and secure websites with Jamstack" },
        { id: 47, title: "Web Scraping Techniques and Ethics", summary: "Best practices and ethical considerations in web scraping" },
        { id: 48, title: "Optimizing React Applications", summary: "Performance optimization techniques for React apps" },
        { id: 49, title: "The Future of CSS Layouts", summary: "Upcoming CSS features for advanced layouts" },
        { id: 50, title: "Building Offline-Capable Web Applications", summary: "Techniques for creating web apps that work offline" },
    ],
};