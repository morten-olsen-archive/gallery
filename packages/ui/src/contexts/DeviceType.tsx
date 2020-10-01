import React, { createContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

interface DeviceTypeContextValue {
  size: 'phone' | 'tablet' | 'desktop';
}

const getSize = (): DeviceTypeContextValue['size'] => {
  const width = Dimensions.get('window').width;

  if (width < 500) {
    return 'phone';
  } else if (width < 1100) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const DeviceTypeContext = createContext<DeviceTypeContextValue>({
  size: Dimensions.get('screen').width > 500 ? 'tablet' : 'phone',
});

const DeviceTypeProvider: React.FC = ({ children }) => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const onChange = () => {
      setSize(getSize());
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <DeviceTypeContext.Provider value={{size}}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

export {
  DeviceTypeContextValue,
  DeviceTypeProvider,
};

export default DeviceTypeContext;
