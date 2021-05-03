import { useEffect } from "react";
import { HttpRequest } from "./API";

export default function App() {

  const request = async () => {
    const http = new HttpRequest();
    try {
      const data = await http.doHttpRequest();
      console.log(data.response[0].title);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <div>Network Probe</div>
  );
}