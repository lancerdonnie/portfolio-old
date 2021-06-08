import React from 'react';

export const LocationProvider = React.createContext();

const Location = ({ children }) => {
  const [state, setState] = React.useState();

  const change = (value) => {
    setState(value);
  };

  return (
    <LocationProvider.Provider value={{ state, change }}>
      {children}
    </LocationProvider.Provider>
  );
};

export default Location;
