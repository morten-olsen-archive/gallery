import React from 'react';
import { useWidget } from '@morten-olsen/gallery';
import example from '!!raw-loader!./examples/config.js';
import { App } from '@morten-olsen/gallery';
import { H2, Body1, Row, Icon } from '@morten-olsen/gallery-ui';
import system, { Storage } from '@morten-olsen/gallery-app-system';

export const title = 'Hello World';

export default () => {
  const Example = useWidget('Docs', 'Example');
  return (
    <>
      <Row>
        <H2>Creating an application</H2>
      </Row>
      <Row>
        <Body1>
          An application in "gallery" consists of 0 or more of the following elements:
        </Body1>
        <Row
          left={<Icon name="monitor" />}
          title="Screens" 
          description="Individual screens that can be rendered. Each screen is just a React component, and responsible for its own rendering."
        />
        <Row
          left={<Icon name="monitor" />}
          title="Widgets"
          description="Widgets are small self contained components, which can be embedded anywhere within screens or widgets inside itself or inside other applications"
        />
        <Row title="Searchers" />
        <Row title="Actions" />
      </Row>
      <Row>
        <Example
          input={example}
          context={{ system }}
          createNode={(config: any) => <App config={config} storage={new Storage()} />}
        />
      </Row>
    </>
  );
};
