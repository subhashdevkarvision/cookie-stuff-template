import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
