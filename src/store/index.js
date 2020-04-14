import React, { useState, createContext } from "react";
import data from "../data/tanks.json";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const store = {
    tanks: [...data.tanks],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
