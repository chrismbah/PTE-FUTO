export interface BlogContent {
    type: string ;
    content: string | BlogContent[];
  }
  
  export interface IBlogPost {
    id: string;
    title: string; 
    sampleImg: string;
    sampleText: string;
    contents: BlogContent[];
  }