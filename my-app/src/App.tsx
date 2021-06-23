import React from "react";
import { BrowserInfo } from "./components/BrowserInfo";
import { DataModal } from "./components/DataModal";
import { Logger } from "./components/Logger";
import { NetworkDiagnostics } from "./components/NetworkDiagnostics";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <NetworkDiagnostics />
      <BrowserInfo />
      <DataModal />
      <Logger />
    </React.Fragment>
  );
}