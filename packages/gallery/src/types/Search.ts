import SearchResult from "./SearchResult";
import { NavigateOptions } from "../contexts/Screen";

type SearchAction<T = any> = (input: string, context: any) => Promise<SearchResult<T>[]>;

interface SearchApi {
  navigate: (options: NavigateOptions) => void;
  context?: any;
}

interface Search<T = any> {
  name: string;
  component?: any;
  action: SearchAction<T>;
  invoke: (params: any, api: SearchApi) => void;
}

interface PreparedSearch extends Search {
  app: string;
  search: string;
}

export { PreparedSearch, SearchApi };

export default Search;
