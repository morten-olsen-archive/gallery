import { useContext } from "react";
import ScreenContext from "../contexts/Screen";

const useScreen = () => {
  const screen = useContext(ScreenContext);
  return screen;
};

export default useScreen;
