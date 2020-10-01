import { Search, SearchResult } from "@morten-olsen/gallery";

const screensSearch: Search = {
  name: "Screens",
  action: async () => {
    const results: SearchResult[] = [
      {
        title: "Servers",
        params: {
          appName: "Jira",
          screenName: "Servers",
        },
      },
    ];

    return results;
  },
  invoke: (params, { navigate }) => {
    navigate(params);
  },
};

export default screensSearch;
