import React, { useState, ReactNode } from 'react';
import styled from 'styled-components/native';

interface Props {
  children: (width: number) => ReactNode;
}

const Wrapper = styled.View`
`;

const WidthDetection: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState(0);

  return (
    <Wrapper
      onLayout={(evt) => {
        const newWidth = evt.nativeEvent.layout.width;
        
        if (newWidth === width) {
          return;
        }
        setWidth(newWidth);
      }}
    >
      {children(width)}
    </Wrapper>
  );
};

export {
  Props,
};

export default WidthDetection;
