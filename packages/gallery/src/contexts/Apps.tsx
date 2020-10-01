import React, { createContext, useCallback, useState, useContext } from 'react';
import ConfigContext from './Config';

interface AppsContextValue {
  contexts: {[name: string]: {[name: string]: any}};
  setContext: (appName: string, context: any) => void;
}

const noProvider = () => {
  throw new Error('No provider');
}

const AppsContext = createContext<AppsContextValue>({
  contexts: {},
  setContext: noProvider,
});

const AppsProvider: React.FC = ({ children }) => {
  const { apps } = useContext(ConfigContext);
  const [contexts, setContexts] = useState<AppsContextValue['contexts']>(Object.values(apps).reduce((output, current) => ({
    ...output,
    [current.name]: current.context || {},
  }), {}));

  const setContext = useCallback((appName: string, context: any) => {
    setContexts((current) => ({
      ...current,
      [appName]: {
        ...(current[appName] || {}),
        ...context,
      },
    }));
  }, []);

  return (
    <AppsContext.Provider value={{ contexts, setContext }}>
      {children}
    </AppsContext.Provider>
  );
};

export {
  AppsContextValue,
  AppsProvider,
};

export default AppsContext;
