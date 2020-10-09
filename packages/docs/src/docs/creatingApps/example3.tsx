import React from 'react';
import system, { Storage } from "@morten-olsen/gallery-app-system";
import * as ui from '@morten-olsen/gallery-ui';
import * as gallery from '@morten-olsen/gallery';
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
import employee from './employee';

const employees: Application = {
  name: 'Employees',
  screens: [employee],
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
  invoke: (params, { navigate }) => {
    navigate({
      appName: 'Employees',
      screenName: 'Employee',
      params,
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
  avatar: faker.image.avatar(),
  title: faker.name.jobTitle(),
}));

export default employees;
`;

export const employee = `
import React from 'react';
import { Screen, useScreen } from '@morten-olsen/gallery';
import employees from './data';
import { Row, Cell, Avatar } from '@morten-olsen/gallery-ui';

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

const employeeScreen: Screen = {
  name: 'Employee',
  component: Employee,
};

export default employeeScreen;
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
  createNode: (output: any) => <gallery.App config={output.default} storage={new Storage()} />,
};

export default example;
