export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
  description: string | null;
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}
