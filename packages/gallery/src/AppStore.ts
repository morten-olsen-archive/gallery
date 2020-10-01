import Storage from "./types/Storage";

class AppStorage {
  private _storage: Storage;
  private _appName: string;

  constructor(appName: string, storage: Storage) {
    this._storage = storage;
    this._appName = appName;
  }

  get = async <T = any>(key: string) =>
    this._storage.get<T>(this._appName, key);
  set = async (key: string, value: any) =>
    this._storage.set(this._appName, key, value);
  remove = async (key: string) => this._storage.remove(this._appName, key);
}

export default AppStorage;
