import React from "react"
import { LG, XXL } from "@zendeskgarden/react-typography"
import { useEffect } from "react"
import { Body, Caption, Cell, Head, HeaderCell, HeaderRow, Row, Table } from "@zendeskgarden/react-tables"

export const NetworkDiagnostics: React.FC = () => {

  useEffect(() => {
    async function name(proxy: Proxy) {
      
    }
  }, [])

  return (
    <React.Fragment>
      <XXL>NetworkDiagnostics</XXL>
      <Table size="small">
        <Caption>
          <LG>Small</LG>
        </Caption>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
          </Row>
        </Body>
      </Table>
    </React.Fragment>
  )
}