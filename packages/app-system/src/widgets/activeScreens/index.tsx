import React, { useContext } from 'react';
import { ScreensContext, Widget } from '@morten-olsen/gallery';
import { Header, MenuItem } from '@morten-olsen/gallery-ui';
import FavoriteContext from '../main/FavoritesContext';

interface Props {
  selected: string;
  setSelected: (selected: string) => void;
}

const ActiveScreens: React.FC<Props> = ({
  selected,
  setSelected,
}) => {
  const { screens, remove } = useContext(ScreensContext);
  const { add } = useContext(FavoriteContext);

  return (
    <Header title="Active">
      {Object.entries(screens).map(([id, screen]) => (
        <MenuItem
          key={id}
          icon={screen.meta.icon || 'monitor'}
          title={screen.title}
          app={screen.app}
          screen={screen.screen}
          onPress={() => setSelected(id)}
          onClose={() => {
            remove(id);
          }}
          onFavorite={() => {
            add({
              title: screen.title,
              icon: screen.meta.icon,
              navigateOptions: {
                appName: screen.app,
                screenName: screen.screen,
                params: screen.params,
              },
            });
          }}
          selected={id === selected}
        />
      ))}
    </Header>
  );
};

const activeScreens: Widget = {
  name: 'Active screens',
  component: ActiveScreens,
};

export default activeScreens;
