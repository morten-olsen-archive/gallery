import React from 'react';
import { useApp, useScreen } from '@morten-olsen/gallery';
import { Button } from '@morten-olsen/gallery-ui';

const withLogin = (WrappedComponent: any) => (props: any) => {
  const { open } = useScreen();
  const { context } = useApp();

  const login = () => {
    open({
      appName: 'Jira',
      screenName: 'Login',
      params: undefined,
    });
  };

  if (!context.session.apiToken || !context.session.username) {
    return <Button onPress={login} title="Login" />
  }

  return (
    <WrappedComponent {...props} />
  );
}

export default withLogin;
