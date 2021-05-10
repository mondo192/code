import { ThemeProvider } from "@zendeskgarden/react-theming";
import { BrowserInfo } from "./components/BrowserInfo";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserInfo />
    </ThemeProvider>
  );
}