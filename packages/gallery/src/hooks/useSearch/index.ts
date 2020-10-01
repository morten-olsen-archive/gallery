import { useContext, useState, useEffect } from "react";
import ConfigContext from "../../contexts/Config";
import AppsContext from '../../contexts/Apps';
import SearchInput from "../../types/SearchInput";
import SearchResult from "../../types/SearchResult";
import { SearchApi } from "../../types/Search";

type PreparedSearchApi = Omit<SearchApi, 'context'>;

interface PreparedSearchResult extends SearchResult {
  app: string;
  search: string;
  invoke: (api: PreparedSearchApi) => void;
}

const useSearch = (input: SearchInput) => {
  const { contexts } = useContext(AppsContext);
  const [results, setResults] = useState<PreparedSearchResult[]>([]);
  const { searchers } = useContext(ConfigContext);
  useEffect(() => {
    const run = async () => {
      setResults(() => []);
      let usable = input.filters
        ? input.filters.map((filter) => {
            let item = searchers.find(
              (s) =>
                (s.app === filter.app && !filter.searcher) ||
                filter.searcher === s.search
            );
            return item;
          })
        : searchers;

      usable = usable.filter((a) => a);

      await Promise.all(
        usable.map(async (search) => {
          const context = contexts[search!.app] || {};
          const results = (await search?.action(input.text, context)) || [];
          const preparedResult = results.map<PreparedSearchResult>(
            (result) => ({
              ...result,
              app: search?.app || "",
              search: search?.search || "",
              invoke: (api: SearchApi) => {
                search?.invoke(result.params, {
                  ...api,
                  context: context,
                });
              },
            })
          );
          setResults((current) => [...current, ...preparedResult]);
        })
      );
    };

    run();
  }, [input.text, searchers]);

  return {
    results,
  };
};

export default useSearch;
