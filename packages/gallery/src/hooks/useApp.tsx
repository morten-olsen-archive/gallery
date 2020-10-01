import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const useApp = () => {
  const context = useContext(AppContext);
  return context;
};

export default useApp;
