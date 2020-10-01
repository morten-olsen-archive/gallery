import React, { createContext, useContext, ReactNode, useCallback } from 'react';
import ScreensContext from './Screens';
import ConfigContext from './Config';

interface NavigateOptions {
  appName: string;
  screenName: string;
  params: any;
};

interface ScreenContextValue {
  id: string;
  open: (options: NavigateOptions) => string | undefined;
  close: () => void;
  setMeta: (meta: any) => void;
  setTitle: (title: string) => void;
  meta: any;
}

interface ScreenProviderProps {
  id: string;
  meta: any;
  children: ReactNode;
}

const noProvider = () => {
  throw new Error('No provider');
};


const ScreenContext = createContext<ScreenContextValue>({
  id: '',
  open: noProvider,
  close: noProvider,
  setMeta: noProvider,
  setTitle: noProvider,
  meta: undefined,
});

const ScreenProvider: React.FC<ScreenProviderProps> = ({ id, meta, children }) => {
  const { apps } = useContext(ConfigContext);
  const {
    add,
    remove,
    setMeta: parentSetMeta,
    setTitle: parentSetTitle,
  } = useContext(ScreensContext);

  const open = useCallback(({
    appName,
    screenName,
    params,
  }: NavigateOptions) => {
    const app = apps.find(app => app.name === appName);
    const screen = app?.screens.find(screen => screen.name === screenName);

    if (!app || !screen) {
      return;
    }

    return add(screen, params, app.name, screen.name);
  }, []);

  const close = useCallback(() => {
    remove(id);
  }, [remove]);

  const setTitle = useCallback((title: string) => {
    parentSetTitle(id, title);
  }, [parentSetTitle]);

  const setMeta = useCallback((meta: any) => {
    parentSetMeta(id, meta);
  }, [parentSetTitle]);

  return (
    <ScreenContext.Provider
      value={{ id, open, close, setMeta, meta, setTitle }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export {
  ScreenProvider,
  ScreenProviderProps,
  ScreenContextValue,
  NavigateOptions,
};

export default ScreenContext;
