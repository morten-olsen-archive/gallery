import React from 'react';
import system, { Storage } from "@morten-olsen/gallery-app-system";
import { App } from '@morten-olsen/gallery';
import faker from 'faker';


export const config = `
import { Config } from '@morten-olsen/gallery';
import system from '@morten-olsen/gallery-app-system';
import employees from './app';

const config: Config = {
  apps: [system, employees],
};

export default config;
`;

export const app = `
import { Application } from '@morten-olsen/gallery';
import searcher from './searcher';

const employees: Application = {
  name: 'Employees',
  screens: [],
  widgets: [],
  searchers: [searcher],
};

export default employees;
`;

export const searcher = `
import { Searcher } from '@morten-olsen/gallery';
import employees from './data';

const searcher: Searcher = {
  name: 'By name',
  action: async (input) => {
    return employees.filter(e => e.name.toLowerCase().includes(input.toLowerCase())).map((e) => ({
      title: e.name,
      icon: 'user',
      params: { id: e.id },
    }));
  },
  invoke: ({ id }, { navigate }) => {
    navigate({
      appName: 'Employees',
      screenName: 'Employee',
    });
  },
};

export default searcher;
`;

export const data = `
import faker from 'faker';

const employees = new Array(50).fill(undefined).map((a, i) => ({
  id: i,
  name: faker.name.findName(),
}));

export default employees;
`;

const example = {
  files: {
    "./config": config,
    "./app": app,
    "./searcher": searcher,
    "./data": data,
  },
  main: "./config",
  modules: {
    "@morten-olsen/gallery-app-system": system,
    "@morten-olsen/gallery": 'foo',
    faker,
  },
  createNode: (output: any) => <App config={output.default} storage={new Storage()} />,
};

export default example;
