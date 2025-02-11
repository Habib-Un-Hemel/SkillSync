import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (pros) => {
  const value = {};

  return (
    <AppContext.Provider value={value}>{pros.children}</AppContext.Provider>
  );
};
