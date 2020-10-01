import React, {useContext} from 'react';
import Config from './types/Config';
import Storage from './types/Storage';
import ConfigContext, { ConfigProvider } from './contexts/Config';
import { AppsProvider } from './contexts/Apps';
import useWidget from './hooks/useWidget';

interface Props {
  config: Config;
  storage: Storage;
}

const WidgetRender: React.FC = () => {
  const { config } = useContext(ConfigContext);
  const main = config.main || {
    app: 'System',
    widget: 'Main',
  };
  const Widget = useWidget(main.app, main.widget);
  if (!Widget) {
    return null;
  }
  return <Widget />
};

const App: React.FC<Props> = ({ config, storage }) => {
  return (
    <ConfigProvider config={config} storage={storage}>
      <AppsProvider>
        <WidgetRender />
      </AppsProvider>
    </ConfigProvider>
  );
};

export default App;
