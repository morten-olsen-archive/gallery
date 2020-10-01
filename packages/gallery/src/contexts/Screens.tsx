import React, { createContext, useCallback, useContext, useState, ReactNode } from 'react';
import { nanoid } from 'nanoid/non-secure';
import ConfigContext from './Config';
import { AppProvider }from '../contexts/AppContext';
import Screen from '../types/Screen';

interface ScreensScreen {
  meta: any;
  app: string;
  screen: string;
  params: any;
  node: ReactNode;
  title: string;
}

type Screens = {[name: string]: ScreensScreen};

interface ScreensContextValue {
  parent?: ScreensContextValue;
  screens: Screens;
  add: (screen: Screen, props: any, appName: string, screenName: string) => string;
  set: (id: string, screen: ScreensScreen) => string;
  remove: (id: string) => ScreensScreen;
  setMeta: (id: string, meta: any) => void;
  setTitle: (id: string, title: string) => void;
}

interface Props {
  children: ReactNode;
  onNavigate?: (id: string) => void;
}

const noProvider = () => {
  throw new Error('No provider');
};

const ScreensContext = createContext<ScreensContextValue>({
  screens: {},
  add: noProvider,
  set: noProvider,
  remove: noProvider,
  setMeta: noProvider,
  setTitle: noProvider,
});

const ScreensProvider: React.FC<Props> = ({ children, onNavigate }) => {
  const { apps } = useContext(ConfigContext);
  const parent = useContext(ScreensContext);
  const [screens, setScreens] = useState<Screens>({});

  const add = useCallback((screen: Screen, params: any, appName: string, screenName: string) => {
    const id = nanoid();

    setScreens((current) => ({
      ...current,
      [id]: {
        node: (
          <AppProvider appName={appName}>
            <screen.component params={params} />
          </AppProvider>
        ),
        title: screen.name,
        meta: {},
        params,
        app: appName,
        screen: screenName,
      },
    }));

    if (onNavigate) {
      onNavigate(id);
    }

    return id;
  }, [apps]);

  const setMeta = useCallback((id: string, meta: any) => {
    setScreens((current) => ({
      ...current,
      [id]: {
        ...current[id],
        meta: {
          ...current[id].meta,
          ...meta,
        },
      },
    }));
  }, []);

  const setTitle = useCallback((id: string, title: string) => {
    setScreens((current) => ({
      ...current,
      [id]: {
        ...current[id],
        title,
      },
    }));
  }, []);

  const set = useCallback((id: string, screen: ScreensScreen) => {
    setScreens((current) => ({
      ...current,
      [id]: screen,
    }));
    return id;
  }, []);

  const remove = useCallback((id: string) => {
    const screen = screens[id];
    setScreens((current) => {
      const next = {...current};
      delete next[id];
      return next;
    });
    return screen;
  }, []);

  return (
    <ScreensContext.Provider
      value={{
        parent: parent && parent.parent && parent,
        screens,
        add,
        set,
        remove,
        setMeta,
        setTitle,
      }}
    >
      {children}
    </ScreensContext.Provider>
  );
};

export {
  ScreensProvider,
};

export default ScreensContext;
