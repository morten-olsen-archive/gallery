import { Config } from "@morten-olsen/gallery";
import system from "@morten-olsen/gallery-app-system";
import jira from "@morten-olsen/gallery-app-jira";

const config: Config = {
  apps: { system, jira },
};

export default config;
