import React, { useState, useCallback, createContext } from 'react';
import { NavigateOptions, useApp } from '@morten-olsen/gallery';

interface Favorite {
  title: string;
  icon?: string;
  navigateOptions: NavigateOptions;
}

interface FavoriteContextValue {
  favorites: Favorite[];
  add: (favorite: Favorite) => void;
  remove: (title: string) => void;
}

const noProvider = () => {
  throw new Error('No provider');
};

const FavoriteContext = createContext<FavoriteContextValue>({
  favorites: [],
  add: noProvider,
  remove: noProvider,
});

const FavoriteProvider: React.FC = ({ children }) => {
  const { context, setContext } = useApp();
  const { favorites = [] } = context;

  const add = useCallback((favorite: Favorite) => {
    setContext({
      favorites: {
        ...favorites,
        favorite,
      },
    });
  }, [context.favorites]);

  const remove = useCallback((title: string) => {
    setContext({
      favorites: favorites.filter((f: Favorite) => f.title !== title),
    });
  }, [context.favorites]);

  return (
    <FavoriteContext.Provider value={{ favorites, add, remove }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export {
  FavoriteProvider,
};

export default FavoriteContext;
