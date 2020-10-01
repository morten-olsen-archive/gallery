import styled from 'styled-components/native';
import { Theme } from '../../theme';

interface Props {
  top?: true | keyof Theme['paddings']; 
  bottom?: true | keyof Theme['paddings']; 
  left?: true | keyof Theme['paddings']; 
  right?: true | keyof Theme['paddings']; 
  all?: true | keyof Theme['paddings']; 
  theme: Theme;
}

const format = (prop: string, theme: Theme, size?: true | keyof Theme['paddings']) => {
  if (!size) {
    return '';
  }
  if (size === true) {
    return `${prop}: ${theme.paddings.md}px;`;
  }
  return `${prop}: ${theme.paddings[size]}px;`;
}

const Margin = styled.View<Props>`
  ${props => format('margin', props.theme, props.all)}
  ${props => format('margin-top', props.theme, props.top)}
  ${props => format('margin-bottom', props.theme, props.bottom)}
  ${props => format('margin-left', props.theme, props.left)}
  ${props => format('margin-right', props.theme, props.right)}
`;

export default Margin;
