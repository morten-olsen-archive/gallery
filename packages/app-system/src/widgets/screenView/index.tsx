import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Widget, ScreenProvider, ScreensContext, useWidget } from '@morten-olsen/gallery';
import { Application } from '@morten-olsen/gallery-ui';

interface Props {
  selected: string;
  fallback?: {
    appName: string;
    widgetName: string;
    props?: any;
  };
}

const Wrapper = styled.View<{
  selected?: boolean;
}>`
  ${({ selected }) => selected ? '' : 'display: none;'}
  height: 100%;
`;

const ScreenView: React.FC<Props> = ({ selected, fallback = { appName: 'System', widgetName: 'Fallback'} }) => {
  const { screens } = useContext(ScreensContext);
  const Fallback = useWidget(fallback.appName, fallback.widgetName);

  if (Object.keys(screens).length === 0 && Fallback) {
    return <Fallback {...fallback.props || {}} />;
  }

  return (
    <>
      {Object.entries(screens).map(([id, screen]) => (
        <ScreenProvider key={id} id={id} meta={screen.meta}>
          <Wrapper selected={selected === id}>
            <Application title={screen.title}>
              {screen.node}
            </Application>
          </Wrapper>
        </ScreenProvider>
      ))}
    </>
  );
};

const screenView: Widget = {
  name: 'Screen view',
  component: ScreenView,
};

export default screenView;
