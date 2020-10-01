import React, { ReactNode } from 'react';
import { Widget, ScreensProvider, ScreenProvider } from '@morten-olsen/gallery';
import { ThemeProvider, DeviceTypeProvider } from '@morten-olsen/gallery-ui';
import { FavoriteProvider } from '../main/FavoritesContext';

interface Props {
  children: ReactNode;
  onNavigate?: (id: string) => void;
}

const Container: React.FC<Props> = ({ children, onNavigate }) => (
  <ThemeProvider>
    <DeviceTypeProvider>
      <FavoriteProvider>
        <ScreensProvider onNavigate={onNavigate}>
          <ScreenProvider id="main" meta={{}}>
            {children}
          </ScreenProvider>
        </ScreensProvider>
      </FavoriteProvider>
    </DeviceTypeProvider>
  </ThemeProvider>
);

const container: Widget = {
  name: 'Container',
  component: Container,
};

export default container;
