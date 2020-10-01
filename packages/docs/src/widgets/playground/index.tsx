import React from 'react';
import { Widget, useWidget } from '@morten-olsen/gallery';

const Playground: React.FC = () => {
  const Example = useWidget('Docs', 'Example');

  return (
    <Example input="hello" />
  );
};

const playground: Widget = {
  name: 'Playground',
  component: Playground,
};

export default playground;
