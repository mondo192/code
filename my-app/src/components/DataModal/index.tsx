import React, { useState } from "react";
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Row, Col } from '@zendeskgarden/react-grid';
import { useContext } from "react";
import { DiagnosticsContext } from "../../contexts/DiagnosticsContext";

export const DataModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const {value, setValue} = useContext(DiagnosticsContext);

  return (
    <React.Fragment>
      <Row>
        <Col textAlign="center">
          <Button onClick={() => setVisible(true)}>Open modal</Button>
          {visible && (
            <Modal onClose={() => setVisible(false)}>
              <Header>Are you sure you want to download this?</Header>
              <Body>
                Using react context should populate this field with all the
                state from the page.
                {value}
              </Body>
              <Footer>
                <FooterItem>
                  <Button onClick={() => setVisible(false)} isBasic>
                    Cancel
                  </Button>
                </FooterItem>
                <FooterItem>
                  <Button isPrimary onClick={() => setVisible(false)}>
                    OK
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