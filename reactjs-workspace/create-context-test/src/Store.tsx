import React, { createContext, useState } from "react";

export const Context = createContext<any | null>(null);

export const Store = ({ children }: any) => {
  const [state, setState] = useState({
    name: "Eamonn Keogh",
    email: "eamonn.keogh@pm.me"
  });

  return (
    <React.Fragment>
      <Context.Provider value={[state, setState]}>
        {children}
      </Context.Provider>
    </React.Fragment>
  );
}
