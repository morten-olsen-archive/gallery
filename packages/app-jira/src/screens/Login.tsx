import React, { useState, useCallback } from 'react';
import { Screen } from '@morten-olsen/gallery';
import AsyncStorage from '@react-native-community/async-storage';
import { useApp, useScreen } from '@morten-olsen/gallery';
import { Panel, Button, TextInput } from '@morten-olsen/gallery-ui';

const Login: React.FC = () => {
  const { setContext } = useApp();
  const { close } = useScreen();

  const [username, setUsername] = useState('');
  const [apiToken, setApiToken] = useState('');

  const login = useCallback(() => {
    setContext({
      username,
      apiToken,
    });

    AsyncStorage.setItem('jira-session', JSON.stringify({
      username,
      apiToken,
    }));
    close();
  }, [username, apiToken]);

  return (
    <Panel>
      <Button onPress={login} title="Login" />
    </Panel>
  );
};

const login: Screen = {
  name: 'Login',
  component: Login,
};

export default login;
