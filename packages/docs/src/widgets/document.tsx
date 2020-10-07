import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { Widget } from '@morten-olsen/gallery';
import docs from '../docs/index';

interface Props {
  id: string;
}

const Wrapper = styled.View`
  margin: auto;
  width: 100%;
  max-width: 900px;
  background: #fff;
`;

const Document: React.FC<Props> = ({ id }) => {
  const doc = useMemo(() => docs.find((d: any) => d.path === id), [id]);
  return (<Wrapper><doc.component /></Wrapper>);
};

const document: Widget = {
  name: 'Document',
  component: Document,
};

export default document;
