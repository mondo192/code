import { XXXL } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { CloudflareTrace } from './components/CloudflareTrace';

const App: React.FC = () => {
  return (
    <Grid gutters={false} debug>
      <Row>
        <Col sm={4}>
          <p>Logo goes here</p>
          
        </Col>
        <Col sm={4}>
          <XXXL>Agent Diagnostics</XXXL>
        </Col>
        <Col sm={4}>
          <p>Back to status page</p>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <CloudflareTrace />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
