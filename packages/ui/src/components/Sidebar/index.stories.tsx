import React from 'react';
import Sidebar from './index';
import MenuItem from './MenuItem';
import Header from '../Header';
import SearchInput from '../inputs/Search';
import Margin from '../Margin';

export const Naked = () => (
  <Sidebar />
);

export const Filled = () => (
  <Sidebar title="Menu">
    <Margin top bottom>
      <SearchInput value="" onChange={() => {}} />
    </Margin>  
    <Header title="Active screens">
      <MenuItem title="Issue #1" app="Github" screen="Main" icon="github" onPress={() => {}} />
      <MenuItem title="Time to celebrait" app="News" screen="Main" icon="radio" onPress={() => {}} />
      <MenuItem title="Inbox" app="Messages" screen="Compose" icon="inbox" onPress={() => {}} />
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

export default {
  title: 'Compnents/Sidebar',
  component: Sidebar,
};
