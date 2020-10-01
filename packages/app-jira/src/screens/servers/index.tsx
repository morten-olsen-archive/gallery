import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Screen, useApp } from '@morten-olsen/gallery';
import { Row, TextInput, Button, Icon } from '@morten-olsen/gallery-ui';

const AddWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const Servers: React.FC = () => {
  const { context, setContext, storage } = useApp();
  const { servers } = context;

  const add = useCallback(() => {
  }, []);

  return (
    <>
      {servers.map((server: any) => (
        <Row
          left={<Icon name="cloud" />}
          right={<Icon name="x" />}
          overline={server.url}
          title={server.username}
        />
      ))}
      <Row>
        <AddWrapper>
        <TextInput label="Url" value="" />
        <TextInput label="Username" value="" />
        <TextInput label="Api token" value="" />
        <Row><Button title="Save" onPress={() => {}} /></Row>
      </AddWrapper>
      </Row>
    </>
  );
};

const servers: Screen = {
  name: 'Servers',
  component: Servers,
};

export default servers;
