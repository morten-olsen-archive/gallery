import { ApplicationDefinition } from "@morten-olsen/gallery";
import screens from "./screens";
import searchers from "./search";
import widgets from "./widgets";

const jiraApp: ApplicationDefinition = async (storage) => {
  return {
    name: "Jira",
    identifier: "jira",
    context: {
      servers: (await storage.get("servers")) || [
        {
          url: "https://foo.bar.io",
          username: "test@example.com",
          token: "sdfsfdsf",
        },
      ],
    },
    screens,
    widgets,
    searchers,
  };
};

export default jiraApp;
