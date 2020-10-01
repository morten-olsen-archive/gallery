interface Storage {
  get: <T = any>(appName: string, key: string) => Promise<T | undefined>;
  set: <T = any>(appName: string, key: string, value: T) => Promise<void>;
  remove: (appName: string, key: string) => Promise<void>;
}

export default Storage;
