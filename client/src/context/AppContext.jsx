// import { createContext } from "react";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  //creating state varibale
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  //creating another state varibale
  const [isSearched, setIsSearched] = useState(false);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
