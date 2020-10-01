import React from 'react';
import { useWidget, Widget } from '@morten-olsen/gallery';

const Main: React.FC = () => {
  const Container = useWidget('System', 'Container');
  const ScreenView = useWidget('System', 'Screen view');
  return (
    <Container>
      <ScreenView
        fallback={{
          appName: 'Docs',
          widgetName: 'Document',
          props: { id: './creatingApps/index.doc.tsx' },
        }}
      />
    </Container>
  );
};

const main: Widget = {
  name: 'Main',
  component: Main,
};

export default main;
