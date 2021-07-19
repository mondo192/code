import React, { useEffect } from "react";
import { Environment } from "../config/Environment";
import { probe } from "../services/Probe";

const endpoints = Environment.data.ENDPOINTS;

export const NetworkDiagnostics: React.FC = () => {
  let promises: Promise<Response>[] = [];

  const goProbe = async () => {
    try {
      endpoints.map(async endpoint => {
        const promise = probe(endpoint);
        console.log(promise);
        
      });
      
      const results = await Promise.allSettled(promises);

      for (const result of results) {
        if (result.status !== "fulfilled") {
          console.log("NET:", result.reason);
        } else {
          console.log("NET:", result.value);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    goProbe();
  }, []);

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            response.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.status}</td>
                  <td>{value.statusText}</td>
                </tr>
              );
            })
          } */}
        </tbody>
      </table>
    </React.Fragment>
  );
}