import React, { createContext, useEffect, useState } from "react";
import { XL } from '@zendeskgarden/react-typography';
import {
  Body,
  Caption,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table
} from '@zendeskgarden/react-tables';

interface ProxyResponse {
  timestamp: number;
  pod: string;
  status: string;
  rtt: string;
}

export const DiagnosticsContext = createContext<ProxyResponse[]>([]);

export const Diagnostics: React.FC = () => {

  const [response] = useState<ProxyResponse[]>([
    {
      timestamp: Date.now(),
      pod: "pod19",
      status: "200 OK",
      rtt: "171 ms"
    },
    {
      timestamp: Date.now(),
      pod: "pod17",
      status: "200 OK",
      rtt: "144 ms"
    },
    {
      timestamp: Date.now(),
      pod: "pod7",
      status: "200 OK",
      rtt: "2011 ms"
    }
  ]);

  useEffect(() => {
    console.log(response);
    console.log(DiagnosticsContext);
    
  })

  return (
    <React.Fragment>
      <Table>
        <Caption>
          <XL>Log Output</XL>
        </Caption>
        <Head>
          <HeaderRow>
            <HeaderCell>Timestamp</HeaderCell>
            <HeaderCell>POD</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>RTT</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {
            response.map((proxy, index) => {
              return (
                <Row key={index}>
                  <Cell>{proxy.timestamp}</Cell>
                  <Cell>{proxy.pod}</Cell>
                  <Cell>{proxy.status}</Cell>
                  <Cell>{proxy.rtt}</Cell>
                </Row>
              );
            })
          }
        </Body>
      </Table>
    </React.Fragment>
  );
}