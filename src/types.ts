export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  backdropUrl: string;
  posterUrl: string;
  releaseYear: number;
  rating: string;
  duration: string;
  genres: string[];
  director: string;
  cast: string[];
  kurdishSub: boolean;
  kurdishDub?: boolean;
}

export interface Category {
  id: string;
  title: string;
  movies: Movie[];
}
