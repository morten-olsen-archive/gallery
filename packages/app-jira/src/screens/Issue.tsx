import React, { useEffect } from 'react';
import { Screen, useScreen } from '@morten-olsen/gallery';
import useApi from '../hooks/api';
import withLogin from '../decorators/withLogin';
import { Panel, H2, Body1 } from '@morten-olsen/gallery-ui';

interface Props {
  params: {
    key: string;
    domain: string;
    preload?: any;
  };
}

const Issue: React.FC<Props> = ({ params }) => {
  const { setTitle } = useScreen();
  const { result } = useApi(params.domain, `/rest/api/latest/issue/${params.key}`);
  const issue = result || params.preload;
  useEffect(() => {
    if (!issue) return;
    setTitle(issue.key);
  }, [issue]);

  if (!result) {
    return <></>;
  }

  return (
    <Panel>
      <H2>{issue.fields.summary}</H2>
      <Body1>{issue.fields.description}</Body1>
    </Panel>
  );

};

const issue: Screen = {
  name: 'Issue',
  component: withLogin(Issue),
};

export default issue;
