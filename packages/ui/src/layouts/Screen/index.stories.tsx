import React, { useState, useCallback } from 'react';
import Screen from './index';
import Application from '../Application';
import Sidebar from '../../components/Sidebar';
import MenuItem from '../../components/Sidebar/MenuItem';
import Header from '../../components/Header';
import SearchInput from '../../components/inputs/Search';
import Margin from '../../components/Margin';
import Avatar from '../../components/Avatar';
import Row from '../../components/Row';
import Cell from '../../components/Row/Cell';
import List from '../../components/List';
import faker from 'faker';

const mails = new Array(20).fill(undefined).map((a, i) => ({
  id: i,
  subject: faker.company.catchPhrase(),
  sender: {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
  },
}));

const App = ({ onMenu }: any) => (
  <Application
    title="Inbox"
    onBack={() => {}}
    onFavorite={() => {}}
    onMaximize={() => {}}
    onMore={() => {}}
    onClose={() => {}}
    onMenu={onMenu}
  >
    <List
      data={mails}
      renderItem={({ item }: any) => (
        <Row
          key={item.id}
          selected={item.id === 3}
          left={(
            <Cell>
              <Avatar size={30} url={item.sender.avatar} />
            </Cell>
          )}
          title={item.subject}
          onPress={() => {}}
          description={item.sender.name}
        />
      )}
    />
  </Application>
);

const Side = ({ toggleSidebar }: any) => (
  <Sidebar title="Menu" onMenu={toggleSidebar}>
    <Margin top bottom>
      <SearchInput value="" onChange={() => {}} />
    </Margin>  
    <Header title="Active screens">
      <MenuItem title="Issue #1" app="Github" screen="Main" icon="github" onPress={() => {}} />
      <MenuItem title="Time to celebrait" app="News" screen="Main" icon="radio" onPress={() => {}} />
      <MenuItem selected title="Inbox" app="Messages" screen="Compose" icon="inbox" onPress={() => {}} />
      <MenuItem title="Search" app="System" screen="Search" icon="search" onPress={() => {}} />
    </Header>
    <Header title="Active screens">
      <MenuItem title="Issue #1" app="Github" screen="Main" icon="github" onPress={() => {}} />
      <MenuItem title="Time to celebrait" app="News" screen="Main" icon="radio" onPress={() => {}} />
      <MenuItem title="Inbox" app="Messages" screen="Compose" icon="inbox" onPress={() => {}} />
      <MenuItem title="Search" app="System" screen="Search" icon="search" onPress={() => {}} />
    </Header>
  </Sidebar>
);

export const Filled = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = useCallback(() => {
    setSidebarVisible(!sidebarVisible);
  }, [sidebarVisible]);
  return (
    <Screen sidebarVisible={sidebarVisible} sidebar={<Side toggleSidebar={toggleSidebar} />}>
      <App onMenu={toggleSidebar} />
    </Screen>
  );
};

export default {
  title: 'Layouts/Screen',
  component: Screen,
};
