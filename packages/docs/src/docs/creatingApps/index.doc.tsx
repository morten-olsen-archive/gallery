import React from 'react';
import { useWidget } from '@morten-olsen/gallery';
import example1 from './examples/1';
import example2 from './examples/2';
import example3 from './examples/3';
import { H2, H6, Body1, Row, Icon, Code, Margin } from '@morten-olsen/gallery-ui';

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
      </Row>
      <Row>
        <Row
          left={<Icon name="monitor" />}
          title={<H6>Screens</H6>} 
        >
          Individual screens that can be rendered. Each screen is just a React component, and responsible for its own rendering.
        </Row>
        <Row
          left={<Icon name="grid" />}
          title={<H6>Widgets</H6>}
        >
          Widgets are small self contained components, which can be embedded anywhere within screens or widgets inside itself or inside other applications
        </Row>
        <Row
          left={<Icon name="search" />}
          title={<H6>Searchers</H6>}
        >
          Searchers are as the name implies search functions, that allow for omni search across all applications (or specific apps using filters)
        </Row>
        <Row
          left={<Icon name="zap" />}
          title={<H6>Actions</H6>}
        >
          Actions are methods that are exposed between applications
        </Row>
      </Row>
      <Row>
        Throughout this guide we will be building an employee directory for the fictional company XYZ, where each step comes with it's own interfaceive playground you can use to play around with the concepts. Be aware that this playground isn't a full environment and will have some limitations compared to an actual implementation.
      </Row>
      <Row>
        <Body1>
          Gallery does not come with a predefined UI, routing mechanism or screen host, only the tools to create them. In these examples we will be using <Code>@morten-olsen/gallery-ui</Code> as out styleguide and <Code>@morten-olsen/gallery-app-system</Code> to provide our routing and screen host and should give a good point for getting started. In the later more advanced guides we will explore creating out own routing and screen hosts.
        </Body1>
      </Row>
      <Row>
        <Body1>
          The first thing we will do is to create a simple skeleton for our app, consisting of a <Code>Config</Code> which specifies which apps to include, as well as an empty <Code>Application</Code>
        </Body1>
      </Row>
      <Row>
        <Example {...example1}/>
      </Row>
      <Row>
        <Body1>
          Okay our application is up and running but does not do much. <Code>@morten-olsen/gallery-app-system</Code> is based around "searches", where you have to use the search bar to find the features you want, so the first thing we want to do is to create a searcher.
        </Body1>
      </Row>
      <Row>
        <Example {...example2}/>
      </Row>
      <Row>
        <Body1>
          We should now be able to search for employees in the sidebar. When we click one it tries to navigate to the <Code>Employee</Code>-screen within our app, but since we haven't created that yet, nothing happens.
        </Body1>
      </Row>
      <Row>
        Next, lets create a screen for showing our employee
      </Row>
      <Row>
        <Example {...example3}/>
      </Row>
    </>
  );
};
