import React from 'react';
import styled from 'styled-components/native';
import Row from '../Row';
import { Theme } from '../../theme';

interface Props {
  label: string;
  value: string;
}

const Input = styled.TextInput<{ theme: Theme }>`
  background: ${({ theme }) => theme.colors.backgroundSelected};
  padding: ${({ theme }) => theme.paddings.sm}px;
  border-radius: ${({ theme }) => theme.sizes.corner}px;
`;

const TextInput: React.FC<Props> = ({ label, value }) => (
  <Row
    overline={label}
  >
    <Input value={value} />
  </Row>
);

export default TextInput;
