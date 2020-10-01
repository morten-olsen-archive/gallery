interface SearchResult<T = any> {
  title: string;
  icon?: string;
  params: T;
}

export default SearchResult;
