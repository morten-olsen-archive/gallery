import React, { useState } from 'react';
import { Widget } from '@morten-olsen/gallery';
import useApi from '../hooks/api';
import Task from '../components/Task';
import { List, SearchInput, Header } from '@morten-olsen/gallery-ui';

interface Props {
  jql: string;
  domain: string;
}

const Search: React.FC<Props> = (props) => {
  const [jql] = useState(decodeURIComponent(props.jql));
  const { result } = useApi(props.domain, `/rest/api/latest/search?jql=${jql}`);

    if (!result) return <></>

  return (
    <List
      data={result.issues}
      renderItem={({ item }: any) => (
        <Task key={item.key} task={item} />
      )}
    />
  );
};

const search: Widget = {
  name: 'Search',
  component: Search,
};

export default search;
