/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import "@zendeskgarden/css-bedrock";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      {element}
    </ThemeProvider>
  );
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
