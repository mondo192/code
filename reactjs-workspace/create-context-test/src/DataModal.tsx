import React, { useContext, useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Row, Col } from '@zendeskgarden/react-grid';

import { DiagnosticsContext } from "./Diagnostics";

export const DataModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const {} = useContext(DiagnosticsContext);

  return (
    <React.Fragment>
      <Row>
        <Col textAlign="center">
          <Button onClick={() => setVisible(true)}>Open modal</Button>
          {visible && (
            <Modal onClose={() => setVisible(false)}>
              <Header>Do you need plant food?</Header>
              <DiagnosticsContext.Provider value={context}>
                <Body>
                  
                  {context?.map(val => {
                    return (
                      <p>{val.pod}</p>
                    );
                  })}
                </Body>
              </DiagnosticsContext.Provider>

              <Footer>
                <FooterItem>
                  <Button onClick={() => setVisible(false)} isBasic>
                    Cancel
                  </Button>
                </FooterItem>
                <FooterItem>
                  <Button isPrimary onClick={() => setVisible(false)}>
                    Add plant food
                  </Button>
                </FooterItem>
              </Footer>
              <Close aria-label="Close modal" />
            </Modal>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}