import { UserAgent } from "./components/UserAgent";

export default function App() {
  return (
    <UserAgent browser={navigator} />
  );
}