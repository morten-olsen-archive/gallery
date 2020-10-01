import React, { createContext, useContext, ReactNode, useCallback, useMemo } from 'react';
import AppStorage from '../AppStore';
import AppsContext from './Apps';
import ConfigContext from './Config';

interface AppContextValue<T = any> {
  context: T;
  setContext: (context: Partial<T>) => void;
  storage: AppStorage;
}

interface Props {
  children: ReactNode,
  appName: string;
}

const noProvider = () => {
  throw new Error('No provider');
}

const AppContext = createContext<AppContextValue>({
  context: {},
  setContext: noProvider,
  storage: undefined as any,
});

const AppProvider: React.FC<Props> = ({ children, appName }) => {
  const apps = useContext(AppsContext);
  const { apps: configApps, storage: configStorage } = useContext(ConfigContext);
  const context = (apps.contexts[appName] || {});
  const setContext = useCallback((context: any) => {
    apps.setContext(appName, context);
  }, [appName])

  const storage = useMemo(() => {
    const id = configApps.find(a => a.name === appName)?.identifier;
    return new AppStorage(id!, configStorage);
  }, [appName]);

  return (
    <AppContext.Provider value={{ context, setContext, storage }}>
      {children}
    </AppContext.Provider>
  );
};

export {
  AppProvider,
  Props,
  AppContextValue,
};

export default AppContext;
