import React from 'react';
import { useContext, useMemo } from "react";
import ConfigContext from "../contexts/Config";
import { AppProvider }from '../contexts/AppContext';

const useWidget = (appName: string, widgetName: string) => {
  const { apps } = useContext(ConfigContext);

  const Widget = useMemo(() => {
    const app = apps.find((app) => app.name === appName);
    if (!app) {
      return undefined;
    }
    const widget = app.widgets.find((widget) => widget.name === widgetName);
    if (!widget) {
      return undefined;
    }
    const Comp: React.FC<any> = (props: any) => (
      <AppProvider appName={appName}>
        <widget.component {...props} />
      </AppProvider>
    );

    return Comp as any;
  }, [appName, widgetName]);

  return Widget;
};

export default useWidget;
