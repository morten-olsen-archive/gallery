import React, { createContext, ReactNode, useMemo, useEffect, useState } from 'react';
import flowRight from 'lodash/flowRight';
import concat from 'lodash/concat';
import Config from '../types/Config';
import Application from '../types/Application';
import { PreparedSearch } from '../types/Search';
import Storage from '../types/Storage';
import AppStorage from '../AppStore';

interface ConfigContextValue {
  config: Config;
  apps: Application[];
  searchers: PreparedSearch[];
  storage: Storage;
}

interface Props {
  config: Config;
  storage: Storage;
  children: ReactNode;
}

const ConfigContext = createContext<ConfigContextValue>(undefined as any);

const ConfigProvider: React.FC<Props> = ({ config, children, storage }) => {
  const [searchers, setSearchers] = useState<PreparedSearch[]>([]);
  const [apps, setApps] = useState<Application[]>([]);
  useEffect(() => {
    const run = async () => {
      const apps = await Promise.all(Object.entries(config.apps).map(async ([id, app]) => {
        const appStorage = new AppStorage(id, storage);
        const preparedApp = typeof app === 'function' ? await app(appStorage) : app;
        preparedApp.identifier = id;
        return preparedApp;
      }));
      setApps(apps);

      const searchList = apps.map((app) => {
        const prepared = app.searchers.map((search) => ({
          ...search,
          app: app.name,
          search: search.name,
        }));
        return prepared;
      });

      const merged = searchList.reduce((output, current) => ([
        ...output,
        ...current,
      ]), [] as PreparedSearch[]);
      setSearchers(merged);
    };

    run().catch(console.error);
  }, [config]);

  const Providers = useMemo(() => {
    const providers = Object.values(apps).map(a => a.providers || []);
    const merged = concat([], ...providers);
    const enhancer = flowRight(merged.map((Self) => (Wrapped: any) => {
      return ({...props}) => (
        <Self><Wrapped {...props} /></Self>
      );
    }));

    const Inner: React.FC = ({ children }) => (
      <>{children}</>
    );

    return enhancer(Inner);
  }, [apps]);

  return (
    <ConfigContext.Provider
      value={{
        config,
        apps,
        searchers,
        storage,
      }}
    >
      <Providers>
        {children}
      </Providers>
    </ConfigContext.Provider>
  );
};

export {
  ConfigProvider,
  Props,
};

export default ConfigContext;
