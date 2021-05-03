import { Well, Title } from '@zendeskgarden/react-notifications';
import { Paragraph, Span, MD, XXL } from '@zendeskgarden/react-typography';

export const CloudflareTrace: React.FC = () => {
  return (
    <Well>
      <Title>
        <XXL>CloudflareTrace</XXL>
      </Title>
      <Paragraph>
        <MD tag="span">
          <Span style={{ fontStyle:"bold" }}>Browser name: </Span>
        </MD>
        Chrome
      </Paragraph>
    </Well>
  );
}