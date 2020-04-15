import React, { useState, createContext } from "react";
import { tanks } from "../data/tanks.json";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const store = {
    tanks,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
