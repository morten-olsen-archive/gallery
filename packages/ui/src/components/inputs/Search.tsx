import React from 'react';
import styled from 'styled-components/native';
import Icon from '../Row/Icon';
import { Theme } from '../../theme';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Wrapper = styled.View<{
  theme: Theme;
}>`
  background: ${({ theme }) => theme.colors.backgroundShade1};
  border-radius: 30px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.sm / 2}px;
  overflow: hidden;
`;

const Input = styled.TextInput<{
  theme: Theme;
}>`
  flex: 1;
  padding: ${({ theme }) => theme.paddings.sm / 2}px;
`;

const SearchInput: React.FC<Props> = ({
  value,
  onChange,
}) => (
  <Wrapper>
    <Icon name="search" />
    <Input value={value} onChangeText={onChange} placeholder="Search..." />
    <Icon name="arrow-right" />
  </Wrapper>
);

export {
  Props,
};

export default SearchInput;
