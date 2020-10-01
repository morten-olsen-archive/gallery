import React from 'react';
import styled from 'styled-components/native';
import BackgroundView from './index';

const DemoContent = styled.View`
  height: 100vh;
`;

const Text = styled.Text`
`;

export const Background = () => (
  <BackgroundView>
    <DemoContent>
      <Text>Demo Content</Text>
    </DemoContent>
  </BackgroundView>
);

export default {
  title: 'components/Background'
};
