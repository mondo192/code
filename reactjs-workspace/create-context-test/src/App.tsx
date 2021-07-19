import React, { createContext, useState } from "react"
import { Store } from "./Store";
import { DataModal } from "./DataModal";
import { Diagnostics } from "./Diagnostics";

export const ThemeContext = createContext(false);

export const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <React.Fragment>
      <Diagnostics />
      <DataModal />
    </React.Fragment>
  );
}

