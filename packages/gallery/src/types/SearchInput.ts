interface SearchFilter {
  app: string;
  searcher?: string;
}

interface SearchInput {
  filters?: SearchFilter[];
  text: string;
}

export default SearchInput;
