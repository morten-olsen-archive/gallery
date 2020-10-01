import React from 'react';
import { ThemeProvider, light, DeviceTypeProvider } from '@morten-olsen/gallery-ui';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <DeviceTypeProvider>
        <Story />
      </DeviceTypeProvider>
    </ThemeProvider>
  ),
];
