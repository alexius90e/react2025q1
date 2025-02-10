import { SearchCaracter } from './search-caracter.interface';

export interface SearchResponse {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: SearchCaracter[];
}
