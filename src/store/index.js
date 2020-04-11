import React, { useState, createContext } from "react";
import data from "../data/tanks.json";

export const StoreContext = createContext(null);

export default ({ children }) => {
    const [tanks, setTanks] = useState([...data.tanks]);

    const getTanks = () => setTanks([...data.tanks]);

    const store = {
        tanks,
        getTanks,
        setTanks
    };

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};
