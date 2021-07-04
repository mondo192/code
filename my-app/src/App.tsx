import React from "react";
import { DataModal } from "./components/DataModal";
import { NetworkDiagnostics } from "./components/NetworkDiagnostics";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <NetworkDiagnostics />
      <DataModal />
    </React.Fragment>
  );
}