import React from "react";
import { NetworkDiagnostics } from "./components/NetworkDiagnostics";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <NetworkDiagnostics />
    </React.Fragment>
  );
}