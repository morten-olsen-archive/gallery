import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Theme } from '../../theme';
import { ButtonText } from '../../typography';

interface Props {
  icon?: string;
  title: string;
  type?: 'primary' | 'secondary' | 'destructive';
  onPress: () => void;
  theme: Theme;
}

const Touch = styled.TouchableOpacity`
`;

const getTheme = (type: Props['type'], theme: Theme) => {
  switch(type) {
    case 'secondary': {
      return {
        background: 'transparent',
        text: theme.colors.primary,
      };
    }
    case 'destructive': {
      return {
        background: 'transparent',
        text: theme.colors.destructive,
      };
    }
    default: {
      return {
        background: theme.colors.primary,
        text: theme.colors.background,
      };
    }
  }
}  

const Wrapper = styled.View<{ background: string, theme: Theme }>`
  padding: ${({ theme }) => theme.paddings.sm}px ${({ theme }) => theme.paddings.md}px;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.sizes.corner}px;
`;

const Button: React.FC<Props> = ({ title, type, onPress, theme }) => {
  const { text, background } = getTheme(type, theme);
  return (
    <Touch onPress={onPress}>
      <Wrapper background={background}>
        <ButtonText textAlign="center" color={text}>{title}</ButtonText>
      </Wrapper>
    </Touch>
  );
};

export default withTheme(Button);
