import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
height: 100%;
width: 100%;
  background: #f5f6f9;
`;

const Background: React.FC = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Background;
    

