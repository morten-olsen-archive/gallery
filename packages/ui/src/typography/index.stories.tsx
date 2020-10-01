import React from 'react';
import styled from 'styled-components/native';
import * as texts from './index';

type FontDescription = {
  name: string;
  component: React.FC<any>;
}[];

const fonts: FontDescription = [{
  name: 'H1',
  component: texts.H1,
}, {
  name: 'H2',
  component: texts.H2,
}, {
  name: 'H3',
  component: texts.H3,
}, {
  name: 'H4',
  component: texts.H4,
}, {
  name: 'H5',
  component: texts.H5,
}, {
  name: 'H6',
  component: texts.H6,
}, {
  name: 'Body1',
  component: texts.Body1,
}, {
  name: 'Body2',
  component: texts.Body2
}, {
  name: 'Subtitle1',
  component: texts.Subtitle1,
}, {
  name: 'Subtitle2',
  component: texts.Subtitle2,
}, {
  name: 'Caption',
  component: texts.Caption,
}, {
  name: 'Underline',
  component: texts.Overline,
}, {
  name: 'ButtonText',
  component: texts.ButtonText,
}];

const Wrapper = styled.View`
  padding: 20px;
`;

export const Fonts = () => (
  <>
  {fonts.map((font) => (
    <Wrapper key={font.name}>
      <texts.Caption>{font.name}</texts.Caption>
      <font.component>Test</font.component>
    </Wrapper>
  ))}
  </>
);

export default {
  title: 'General/Typography',
  component: texts.Body1,
}
