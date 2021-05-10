import { Browser } from '../common/types';
import { useEffect } from 'react';
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


export const UserAgent: React.FC<Browser> = (props) => {

  useEffect(() => {
    console.log('Browser Props', props.browser.appCodeName);
  }, []);

  return (
    <Table>
      <Caption>
        <XL>User Agent</XL>
      </Caption>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        <Row>
          <Cell>Raspberries</Cell>
        </Row>
      </Body>
    </Table>
  );
}
