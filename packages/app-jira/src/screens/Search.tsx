import React from 'react';
import { useWidget, Screen } from '@morten-olsen/gallery';

interface Props {
  params: {
    jql: string;
  };
}

const Search: React.FC<Props> = ({ params }) => {
  const SearchWidget = useWidget('Jira', 'Search');

  return (
    <SearchWidget jql={params.jql} />
  );
};

const search: Screen = {
  name: 'Search',
  component: Search,
};

export default search;
