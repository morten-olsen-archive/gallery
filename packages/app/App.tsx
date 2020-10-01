import React from 'react';
import { App } from '@morten-olsen/gallery';
import config from '@morten-olsen/gallery-demo';
import { Storage } from '@morten-olsen/gallery-app-system';

export default function OuterApp() {
  return (
    <App config={config} storage={new Storage()} />
  );
}
