import React from 'react';
import MarkdownDisplay, { RenderRules, RenderFunction } from 'react-native-markdown-display';
import { H1, H2, H3, H4, H5, H6, Body1, Row, Icon, Code, Margin } from '@morten-olsen/gallery-ui';

const createRule = (Type: any): RenderFunction => (node, children, parent, styles) => (
  <Type key={node.key}>{children}</Type>
);

const rules: RenderRules = {
  heading1: createRule(H1),
  heading2: createRule(H2),
  heading3: createRule(H3),
  heading4: createRule(H4),
  heading5: createRule(H5),
  heading6: createRule(H6),
  body: createRule(Body1),
  code: createRule(Code),
};

const Markdown: React.FC = ({ children }) => {
  return (
    <MarkdownDisplay
      rules={rules}
      mergeStyle={false}
    >
      {children}
    </MarkdownDisplay>
  );
};

export default Markdown;
