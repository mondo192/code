import React from "react";
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
import { LG } from '@zendeskgarden/react-typography';

const LogOutput: React.FC = () => {
  return (
    <React.Fragment>
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
            <Cell>Raspberries</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Moist and slightly acidic</Cell>
          </Row>
          <Row>
            <Cell>Strawberries</Cell>
            <Cell>Full sun</Cell>
            <Cell>Medium moisture</Cell>
          </Row>
          <Row>
            <Cell>Grapes</Cell>
            <Cell>Full sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Cherries</Cell>
            <Cell>Partial sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Tomatoes</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Well draining</Cell>
          </Row>
        </Body>
      </Table>
    </React.Fragment>
  );
}

export default LogOutput;