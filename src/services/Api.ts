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

import axios from "axios";
import type { UnsplashResponse } from "./types";

const ACCESS_KEY = "xCW9qGHehtwspTlfSivxG7tj1AU-NdnadCHDu2MYEIM";

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: 20,
        client_id: ACCESS_KEY,
      },
    }
  );
  return response.data;
};
