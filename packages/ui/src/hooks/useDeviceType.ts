import { useContext } from "react";
import DeviceTypeContext, {
  DeviceTypeContextValue,
} from "../contexts/DeviceType";

type Sizes = DeviceTypeContextValue["size"];

const useDevice = () => {
  const context = useContext(DeviceTypeContext);
  return context;
};

export { Sizes };

export default useDevice;
