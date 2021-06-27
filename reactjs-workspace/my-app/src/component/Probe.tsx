import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Request } from "../utils/Request";
import { development } from "../config/Environment";

interface RequestResult {
  responseURL: string;
  status: number;
  statusText: string;
  rtt: number;
}

interface Result {
  response: RequestResult;
}

const endpoints = development.data.ENDPOINT;

const Probe: React.FC = () => {
  const [response, setResponse] = useState<RequestResult>();

  const doHttpProbe = async (method: string, url: URL) => {
    try {
      const request = new Request();
      const response = await request.probe(method, url);
      const { responseURL, status, statusText} = response;
      const rtt = request.roundTripTime();
      console.log(response);
      
      setResponse({ responseURL, status, statusText, rtt });
    } catch (error) {
      setResponse(error);
    }
  }

  useEffect(() => {
    doHttpProbe("HEAD", endpoints[0]);
  }, []);

  return (
    <React.Fragment>
      {JSON.stringify(response)}
    </React.Fragment>
  );
}

export default Probe;