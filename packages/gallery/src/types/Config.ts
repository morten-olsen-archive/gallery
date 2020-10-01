import AppStorage from "../AppStore";
import Application from "./Application";

type ApplicationDefinition =
  | ((storage: AppStorage) => Promise<Application>)
  | (() => Application)
  | Application;

interface Config {
  main?: {
    app: string;
    widget: string;
  };
  apps: {
    [id: string]: ApplicationDefinition;
  };
}

export { ApplicationDefinition };

export default Config;
