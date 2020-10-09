import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { Widget } from '@morten-olsen/gallery';
import docs from '../docs/index';
import Markdown from '../components/Markdown';

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
  const doc = useMemo(() => docs[id], [id]);
  const content = useMemo(() => doc?.content(), [doc]);
  if (!content) {
    return null;
  }
  return (
    <Wrapper>
      {content.map((elm) => {
        if (typeof elm === 'string') {
          return <Markdown>{elm}</Markdown>
        }
        return elm;
      })}
    </Wrapper>
  );
};

const document: Widget = {
  name: 'Document',
  component: Document,
};

export default document;
