import React, { useContext, useCallback } from 'react';
import { ScreenContext } from '@morten-olsen/gallery';

const BlockTitle: React.FC = ({ children }) => {
  const context = useContext(ScreenContext);

  const setTitle = useCallback(() => {}, []);

  return (
    <ScreenContext.Provider value={{ ...context, setTitle }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default BlockTitle;
