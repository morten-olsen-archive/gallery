import React, { useState } from 'react';
import { SearchInput, Sidebar, MenuItem } from '@morten-olsen/gallery-ui';
import { Widget, useWidget, useSearch, useScreen, NavigateOptions } from '@morten-olsen/gallery';

interface Props {
  selected: string,
  setSelected: (selected: string) => void;
  setShowMenu: (show: boolean) => void;
}

const SidebarView: React.FC<Props> = ({ selected, setSelected, setShowMenu }) => {
  const ActiveScreens = useWidget('System', 'Active screens');
  const Favorites = useWidget('System', 'Favorites');
  const { open } = useScreen();
  const [searchInput, setSearchInput] = useState('');
  const { results } = useSearch({
    text: searchInput
  });

  return (
    <Sidebar title="Menu" onClose={() => setShowMenu(false)}>
      <SearchInput value={searchInput} onChange={setSearchInput} />
      {!!searchInput ? (
        <>
          {results.map((result) => (
            <MenuItem
              icon={result.icon || 'circle'}
              title={result.title}
              app={result.app}
              screen={result.search}
              onPress={() => {
                const navigate = (options: NavigateOptions) => {
                  open(options);
                };
                result.invoke({
                  navigate,
                });
                setSearchInput('');
              }}
            />
          ))}
        </>
      ) : (
        <>
          <Favorites setSelected={setSelected} />
          <ActiveScreens selected={selected} setSelected={setSelected} />
        </>
      )}
    </Sidebar>
  );
};

const sidebar: Widget = {
  name: 'Sidebar',
  component: SidebarView,
};

export default sidebar;
