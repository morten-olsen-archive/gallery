import Screen from "./Screen";
import Search from "./Search";
import Widget from "./Widget";

interface Application {
  identifier: string;
  context?: any;
  name: string;
  shortCode?: string;
  screens: Screen[];
  searchers: Search[];
  widgets: Widget[];
  providers?: any[];
}

export default Application;
