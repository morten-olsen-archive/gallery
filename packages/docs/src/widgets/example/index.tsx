import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import { Widget } from '@morten-olsen/gallery';
import { Row, Icon } from '@morten-olsen/gallery-ui';

interface Props {
  input: string;
  height?: string | number;
  context?: {[name: string]: any};
  createNode: (input: any) => any;
}

const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

const Output = styled.View`
  width: 50%;
`;

const ErrorMsg = styled.View`
  color: red;
`;

const Preview = styled.View`
  flex: 1;
`;

const Editor = styled.View`
  width: 50%;
  flex: 1;
`;

const Edit = styled.TextInput`
  width: 100%;
  flex: 1;
`;

const Example: React.FC<Props> = ({ input, context = {}, createNode, height = 400 }) => {
  const [value, setValue] = useState(input);
  const [node, setNode] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);
  const compile = useCallback(() => {
    setError(undefined);
    setNode(undefined);
    try {
      const module = { exports: {} };
      const fn = new Function('module', 'exports', ...Object.keys(context), value);
      fn(module, module.exports, ...Object.values(context));
      const newComponent = createNode(module.exports);
      setNode(newComponent);
    } catch (err) {
      console.log(err);
      setError(err);
    };
  }, [value]);

  useEffect(() => {
    compile();
  }, []);
  return (
    <Wrapper style={{ height }}>
      <Editor>
        <Edit multiline value={value} onChangeText={setValue} />
        <Row
          right={<Icon name="play" onPress={compile} />}
        />
      </Editor>
      <Output>
        {error && (
          <ErrorMsg>{error.toString()}</ErrorMsg>
        )}
        <Preview>
          {node}
        </Preview>
      </Output>
    </Wrapper>
  );
};

const example: Widget = {
  name: 'Example',
  component: Example,
};

export default example;

