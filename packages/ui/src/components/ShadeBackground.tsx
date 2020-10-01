import React, { ReactNode } from 'react';
import { withTheme, ThemeProvider } from 'styled-components/native';
import { Theme } from '../theme';

interface Props {
  children: ReactNode;
  theme: Theme;
};

const ShadeBackground: React.FC<Props> = ({ theme, children }) => {
  const shadeTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: theme.colors.backgroundShade1,
      backgroundShade1: theme.colors.background,
    },
  };

  return (
    <ThemeProvider theme={shadeTheme}>
      {children}
    </ThemeProvider>
  );
};

export default withTheme(ShadeBackground);
