import React from 'react';
import system, { Storage } from "@morten-olsen/gallery-app-system";
import { App } from '@morten-olsen/gallery';
import faker from 'faker';


export const config = `
const system = require('@morten-olsen/gallery-app-system');
const employees = require('./app');

const config = {
  apps: [system, employees],
};

module.exports = config;
`;

export const app = `
const searcher = require('./searcher');
const employees = {
  name: 'Employees',
  screens: [],
  widgets: [],
  searchers: [searcher],
};

module.exports = employees;
`;

export const searcher = `
const employees = require('./data');

const searcher = {
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

module.exports = searcher;
`;

export const data = `
const faker = require('faker');
faker.seed(0);
const employees = new Array(50).fill(undefined).map((a, i) => ({
  id: i,
  name: faker.name.findName(),
}));

module.exports = employees;
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
    faker,
  },
  createNode: (output: any) => <App config={output} storage={new Storage()} />,
};

export default example;
