export interface BlogPost {
  author: string;
  title: string;
  postType: string;
  sampleImg: string;
  contents: ContentBlock[];
}

interface ContentBlock {
  type: "p" | "p bold" | "h1" | "img" | "list";
  content: string | { type: string, content: string }[] ; // Handling nested lists
} 
  export interface IBlogPost {
    id: string;
    author: string;
    date: string;
    title: string; 
    sampleImg: string;
    postType: string;
    contents: ContentBlock[];
  }
  export interface BlogPostProp {
    blogPosts: IBlogPost[]
  }