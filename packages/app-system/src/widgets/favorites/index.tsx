import React, { useContext } from 'react';
import { ScreenContext, Widget } from '@morten-olsen/gallery';
import { MenuItem, Header } from '@morten-olsen/gallery-ui';
import FavoriteContext from '../main/FavoritesContext';

interface Props {
  setSelected: (selected: string) => void;
}

const Favorites: React.FC<Props> = ({
  setSelected,
}) => {
  const { open } = useContext(ScreenContext);
  const { favorites, remove } = useContext(FavoriteContext);

  return (
    <Header title="Favorites">
      {favorites.map((favorite) => (
        <MenuItem
          key={favorite.title}
          icon={favorite.icon || 'monitor'}
          title={favorite.title}
          app={favorite.navigateOptions.appName}
          screen={favorite.navigateOptions.screenName}
          onPress={() => {
            const id = open(favorite.navigateOptions);
            if (!id) {
              return;
            }
            setSelected(id);
          }}
          onClose={() => {
            remove(favorite.title);
          }}
        />
      ))}
    </Header>
  );
};

const favorites: Widget = {
  name: 'Favorites',
  component: Favorites,
};

export default favorites;
