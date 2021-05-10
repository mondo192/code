import { XL } from '@zendeskgarden/react-typography';
import { Body, Caption, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { useEffect, useState } from 'react';
import { BrowserSniffer } from '../../utils/BrowserSniffer';
import { Browser } from '../../common/types';


export const BrowserInfo = () => {
  const [browser, setBrowser] = useState<Browser>({});

  useEffect(() => {
    const parseUserAgent = async () => {
      const browser = new BrowserSniffer();
      const position = await browser.getGeolocation();
      setBrowser({
        name: browser.getBrowserName(),
        version: browser.getBrowserVersion(),
        os: browser.getOperatingSystemName(),
        osVersion: browser.getOperatingSystemVersion(),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });      
    }
    parseUserAgent();
  }, []);

  return (
    <div>
      <Table>
        <Caption>
          <XL>Browser Info</XL>
        </Caption>
        <Head>
          <HeaderRow>
            {
              Object.keys(browser).map((value, index) => {
                return <HeaderCell key={index}>{value}</HeaderCell>
              })
            }
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            {
              Object.entries(browser).map((value, index) => {
                return <Cell key={index}>{value[1]}</Cell>
              })
            }
          </Row>
        </Body>
      </Table>
    </div>
  );
}