import React from 'react';
import styled from 'styled-components/native';

interface Props {
  url: string;
  size: number;
}

const Image = styled.Image<{
  size: number;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  `;

const Avatar: React.FC<Props> = ({ url, size = 45 }) => (
  <Image
    size={size}
    source={{ uri: url }}
  />
);

export default Avatar;

