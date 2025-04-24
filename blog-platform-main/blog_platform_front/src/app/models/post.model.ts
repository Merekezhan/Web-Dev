export interface Post {
    id?: number;
    title: string;
    body: string;
    category: string;
    tags: string[];
    author?: string;
    created_at?: string;
  }
  