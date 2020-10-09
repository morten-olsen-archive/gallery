import React from 'react';
import { H6, Row, Icon } from '@morten-olsen/gallery-ui';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';
import { Example } from '../../widgets/example';

export const title = 'Creating an application';

const TypeList = () => (
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
);

export const content = () => [`
# Creating an application

An application in "gallery" consists of 0 or more of the following elements:
` , <TypeList /> , `
Throughout this guide we will be building an employee directory for the fictional company XYZ, where each step comes with it's own interfaceive playground you can use to play around with the concepts. Be aware that this playground isn't a full environment and will have some limitations compared to an actual implementation.

Gallery does not come with a predefined UI, routing mechanism or screen host, only the tools to create them. In these examples we will be using \`@morten-olsen/gallery-ui\` as out styleguide and \`@morten-olsen/gallery-app-system\` to provide our routing and screen host and should give a good point for getting started. In the later more advanced guides we will explore creating out own routing and screen hosts.

The first thing we will do is to create a simple skeleton for our app, consisting of a \`Config\` which specifies which apps to include, as well as an empty \`Application\`
` , <Example {...example1}/> , `
Okay our application is up and running but does not do much.

If we wanted to run this project we could use \`@morten-olsen/gallery-cli\` to run \`gallery-cli dev config.tsx\` which would start a development server on port 4000

\`@morten-olsen/gallery-app-system\` is based around "searches", where you have to use the search bar to find the features you want, so the first thing we want to do is to create a searcher.
` , <Example {...example2}/> , `
We should now be able to search for employees in the sidebar. When we click one it tries to navigate to the \`Employee\`-screen within our app, but since we haven't created that yet, nothing happens.

Next, lets create a screen for showing our employee
` , <Example {...example3}/>
];
