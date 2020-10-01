import Storage from "@morten-olsen/gallery/dist/types/Storage";
import AsyncStorage from "@react-native-community/async-storage";

class SystemStorage implements Storage {
  get = async (appName: string, key: string) => {
    const raw = await AsyncStorage.getItem(`${appName}__${key}`);
    if (!raw) {
      return undefined;
    }
    return JSON.parse(raw);
  };

  set = async (appName: string, key: string, value: any) => {
    await AsyncStorage.setItem(`${appName}__${key}`, JSON.stringify(value));
  };
  remove = async (appName: string, key: string) => {
    await AsyncStorage.removeItem(`${appName}__${key}`);
  };
}

export default SystemStorage;
