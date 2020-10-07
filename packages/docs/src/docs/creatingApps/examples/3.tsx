import React from 'react';
import system, { Storage } from "@morten-olsen/gallery-app-system";
import * as ui from '@morten-olsen/gallery-ui';
import * as gallery from '@morten-olsen/gallery';
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
const employee = require('./employee');
const employees = {
  name: 'Employees',
  screens: [employee],
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
  invoke: (params, { navigate }) => {
    navigate({
      appName: 'Employees',
      screenName: 'Employee',
      params,
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
  avatar: faker.image.avatar(),
  title: faker.name.jobTitle(),
}));

module.exports = employees;
`;

export const employee = `
const React = require('react');
const employees = require('./data');
const { useScreen } = require('@morten-olsen/gallery');
const {
  Row,
  Cell,
  Avatar,
} = require('@morten-olsen/gallery-ui');

const Employee = ({ params }) => {
  const employee = React.useMemo(
    () => employees[params.id],
      [params.id],
  );

  const { setTitle, setMeta } = useScreen();

  React.useEffect(() => {
    setTitle(employee.name);
    setMeta({ icon: 'user' });
  }, [employee]);

  return (
    <Row
      left={(
        <Cell>
          <Avatar
            size={50}
            url={employee.avatar}
          />
        </Cell>
      })
      title={employee.name}
      description={employee.title}
    />
  );
};

module.exports = {
  name: 'Employee',
  component: Employee,
};
`;

const example = {
  files: {
    "./config": config,
    "./app": app,
    "./searcher": searcher,
    "./data": data,
    "./employee": employee,
  },
  main: "./config",
  modules: {
    "@morten-olsen/gallery-app-system": system,
    "@morten-olsen/gallery-ui": ui,
    "@morten-olsen/gallery": gallery,
    faker,
    react: React,
  },
  createNode: (output: any) => <gallery.App config={output} storage={new Storage()} />,
};

export default example;
