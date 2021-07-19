import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <h1>Layout</h1>
      {children}
    </React.Fragment>
  );
}