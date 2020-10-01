import React, { useMemo } from 'react';
import { Widget } from '@morten-olsen/gallery';
import docs from '../docs/index';

interface Props {
  id: string;
}

const Document: React.FC<Props> = ({ id }) => {
  const doc = useMemo(() => docs.find((d: any) => d.path === id), [id]);
  return (<div><doc.component /></div>);
};

const document: Widget = {
  name: 'Document',
  component: Document,
};

export default document;
