import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { App, Storage } from "@morten-olsen/gallery";

const storage: Storage = {
  get: async (appName: string, key: string) => {
    const raw = localStorage.getItem(`${appName}__${key}`);
    if (!raw) return undefined;
    return JSON.parse(raw);
  },
  set: async (appName: string, key: string, value: any) => {
    localStorage.setItem(`${appName}__${key}`, JSON.stringify(value));
  },
  remove: async (appName: string, key: string) => {
    localStorage.removeItem(`${appName}__${key}`);
  },
};

declare var __CONFIG_LOCATION__: string;

const root = document.getElementById('root');
const config = require(__CONFIG_LOCATION__);
const HotApp = hot(App);
const app = <HotApp config={config.__esModule ? config.default : config} storage={storage} />

console.log(config)
ReactDOM.render(app, root);
