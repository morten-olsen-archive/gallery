import React from 'react';
import system, { Storage } from "@morten-olsen/gallery-app-system";
import { App } from '@morten-olsen/gallery';

export const config = `
import { Config } from '@morten-olsen/gallery-app-system';
import system from '@morten-olsen/gallery-app-system';
import employees from './app';

const config: Config = {
  apps: [system, employees],
};

export default config;
`;

export const app = `
import { Application } from '@morten-olsen/gallery-app-system';

const employees: Application = {
  name: 'Employees',
  screens: [],
  widgets: [],
  searchers: [],
};

export default employees;
`;

const example = {
  files: {
    "./config": config,
    "./app": app,
  },
  main: "./config",
  modules: {
    "@morten-olsen/gallery-app-system": system,
    "@morten-olsen/gallery": 'foo',
  },
  createNode: (output: any) => <App config={output.default} storage={new Storage()} />,
};

export default example;
