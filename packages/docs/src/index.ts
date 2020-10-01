import { Config } from "@morten-olsen/gallery";
import system from "@morten-olsen/gallery-app-system";
import docs from "./docs";

const config: Config = {
  main: {
    app: "Docs",
    widget: "Main",
  },
  apps: { system, docs },
};

export default config;
