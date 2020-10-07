import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import styled from 'styled-components/native';
import { Widget } from '@morten-olsen/gallery';
import { Row, Icon, Code } from '@morten-olsen/gallery-ui';
import compileFn from './compile';

interface Props {
  files: {[name: string]: string};
  modules: {[name: string]: any};
  main: string;
  height?: string | number;
  context?: {[name: string]: any};
  createNode: (input: any) => any;
}

const Wrapper = styled.View`
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 30px rgba(0,0,0,.2);
`;

const EditorWrapper = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Output = styled.View`
  flex: 1;
  margin-bottom: 30px;
`;

const ErrorMsg = styled.View`
  color: red;
`;

const Preview = styled.View`
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
`;

const Editor = styled.View`
  width: 50%;
  flex: 1;
`;

const Edit = styled.TextInput`
  width: 100%;
  font-family: monospace;
  padding: 15px;
  background: #333;
  border-radius: 15px;
  color: #fff;
  flex: 1;
`;

const FileSelect = styled.View`
  flex: 1;
  max-width: 200px;
  margin-right: 30px;
`;

class ErrorBounds extends React.Component<{ children: ReactNode, error: any, setError: (err: any) => void }> {
  constructor(props: any) {
    super(props);
  }

  componentDidCatch(err: any) {
    this.props.setError(err);
  }

  render() {
    if (this.props.error) {
      return <ErrorMsg>{this.props.error.toString()}</ErrorMsg>
    }
    return this.props.children || null; 
  }
}

const Example: React.FC<Props> = ({ files, modules, main, createNode, height = 800 }) => {
  const [localFiles, setLocalFiles] = useState(files);
  const [selected, setSelected] = useState(Object.keys(files)[0]);
  const [node, setNode] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);
  const compile = useCallback(() => {
    setError(undefined);
    setNode(undefined);
    try {
      const output = compileFn(main, localFiles, modules);
      const newComponent = createNode(output);
      setNode(newComponent);
    } catch (err) {
      console.log(err);
      setError(err);
    };
  }, [localFiles, modules]);

  const setFileContent = useCallback((code: string) => {
    setLocalFiles({
      ...files,
      [selected]: code,
    });
  }, [files, selected]);

  useEffect(() => {
    compile();
  }, []);

  return (
    <Wrapper style={{ height }}>
      <Output>
        <Preview>
          <ErrorBounds setError={setError} error={error}>
            {node}
          </ErrorBounds>
        </Preview>
      </Output>
      <EditorWrapper>
        <FileSelect>
          {Object.entries(files).map(([path]) => (
            <Row
              key={path}
              title={<Code>{path}.js</Code>}
              onPress={() => setSelected(path)}
              selected={path === selected}
            />
          ))}
        </FileSelect>
        <Editor>
          <Edit multiline value={localFiles[selected]} onChangeText={setFileContent} />
          <Row
            right={(
              <>
                <Icon name="refresh-cw" onPress={() => { setLocalFiles(files); }} />
                <Icon name="play" onPress={compile} />
              </>
            )}
          />
        </Editor>
      </EditorWrapper>
    </Wrapper>
  );
};

const example: Widget = {
  name: 'Example',
  component: Example,
};

export default example;

