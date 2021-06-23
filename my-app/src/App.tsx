import React from "react";
import { useState } from "react";
import { BrowserInfo } from "./components/BrowserInfo";
import { DataModal } from "./components/DataModal";
import { Logger } from "./components/Logger";
import { NetworkDiagnostics } from "./components/NetworkDiagnostics";
import { DiagnosticsContext } from "./contexts/DiagnosticsContext";

export const App: React.FC = () => {
  const [value, setValue] = useState("Hello from context");

  return (
    <React.Fragment>
      <NetworkDiagnostics />
      <BrowserInfo />
      <DiagnosticsContext.Provider value={{value, setValue}}>
        <DataModal />
      </DiagnosticsContext.Provider>
      <Logger />
    </React.Fragment>
  );
}