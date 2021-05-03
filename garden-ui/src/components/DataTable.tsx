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

export const DataTable: React.FC = () => {
  return (
    <Table>
      <Caption>
        <XL>Garden details</XL>
      </Caption>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil</HeaderCell>
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
  );
}