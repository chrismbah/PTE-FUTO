export interface BlogPost {
  no:number;
  author: string;
  title: string;
  postType: "top" | "featured" | "others";
  sampleImg: string;
  contents: ContentBlock[];
}

export interface ContentBlock {
  type: "p" | "p-bold" | "h1" | "h2" | "img" | "list";
  content: string | { type: "p" | "h2" | "img" | "p-bold" , content: string }[] ; // Handling nested lists
}
export interface ContentBlockProp{
  contents: ContentBlock[]
}
  export interface IBlogPost {
    id: string;
    no: number;
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