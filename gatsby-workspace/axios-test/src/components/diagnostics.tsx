import React, { useEffect, useState } from "react";
import { Environment } from "../config/environment";
import { AxiosResponse } from "axios";
import { head } from "../services/http";
import { buildDict } from "../utils/dict";

const proxies = Environment.ENDPOINTS;

export const Diagnostics: React.FC = () => {
  const [] = useState();

  const goProbe = async (proxies: URL[]) => {
    let promises: Promise<AxiosResponse>[] = [];

    try {
      proxies.forEach(proxy => {
        promises.push(head(proxy));
      });
    } catch (error) {
      console.error(error.message);
    }

    const results = await Promise.allSettled(promises);
    
    // util func to make dictionary of results
    const data = buildDict(results, proxies);

    console.log(data);
    
    
    // puts data to page
    // setTiming(data);
  }

  useEffect(() => {
    goProbe(proxies);
  }, []);

  return (
    <React.Fragment>
      <h1>Diagnostics</h1>
      <table>
        <thead>
          <tr>
            <th>Timings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{timing}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}