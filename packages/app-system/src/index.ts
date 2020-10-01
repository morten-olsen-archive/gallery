import { Application } from "@morten-olsen/gallery";
import widgets from "./widgets";
import MainDetails from "./screens/MainDetails";
import Storage from "./Storage";

const system: Application = {
  name: "System",
  identifier: "system",
  context: {
    favorites: [],
  },
  screens: [
    {
      name: "MainDetails",
      component: MainDetails,
    },
  ],
  widgets,
  searchers: [],
};

export { Storage };

export default system;
