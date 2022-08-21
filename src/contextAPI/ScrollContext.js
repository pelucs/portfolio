import { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollContextProvider = props => {

  const [active, setActive] = useState("10px");

  return(
    <ScrollContext.Provider value={{ active, setActive }}>
      {props.children}
    </ScrollContext.Provider>
  );
}