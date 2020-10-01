import React from 'react';
import { useScreen } from '@morten-olsen/gallery';
import { Row, Icon, Cell, Tags, Subtitle1 } from '@morten-olsen/gallery-ui';

interface Props {
  task: any;
}

const Task: React.FC<Props> = ({ task }) => {
  const { open } = useScreen();

  return (
    <Row
      left={(
        <>
          <Icon name="check-circle" />
          <Cell><Subtitle1 bold>{task.key}</Subtitle1></Cell>
        </>
      )}
      title={task.fields.summary || 'test'}
      onPress={() => {
        open({
          appName: 'Jira',
          screenName: 'Issue',
          params: {
            key: task.key,
            preload: task,
          },
        });
      }}
      right={(
        <Tags tags={[
          { title: task.fields.issuetype.name },
          { title: task.fields.status.name },
          ...task.fields.labels.map((l: string) => ({ title: l })),
          ...task.fields.components.map((l: any) => ({ title: l.name })),
        ]} />
      )}
    />
  );
};

export default Task;
