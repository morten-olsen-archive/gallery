import React from 'react';
import system, { Storage } from "@morten-olsen/gallery-app-system";
import { App } from '@morten-olsen/gallery';

export const config = `
const system = require('@morten-olsen/gallery-app-system');
const employees = require('./app');

const config = {
  apps: [system, employees],
};

module.exports = config;
`;

export const app = `
const employees = {
  name: 'Employees',
  screens: [],
  widgets: [],
  searchers: [],
};
`;

const example = {
  files: {
    "./config": config,
    "./app": app,
  },
  main: "./config",
  modules: {
    "@morten-olsen/gallery-app-system": system,
  },
  createNode: (output: any) => <App config={output} storage={new Storage()} />,
};

export default example;
