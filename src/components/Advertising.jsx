/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import { HandShake } from '../elements/AdvertisingIcons';
import ExternalLink from '../elements/ExternalLink';

const DocumentLink = ({ children }) => (
  <ExternalLink href="https://bit.ly/373ZaJz">{children}</ExternalLink>
);

const Advertising = () => (
  <Container>
    <Styled.h2>
      <HandShake sx={{ mr: 3 }} /> Seja nosso parceiro
    </Styled.h2>
    <Styled.p>
      Você também pode usar o Quanto Custa como um meio de divulgação. É
      possível anunciar seu negócio, produto ou serviço no aplicativo através de
      uma propaganda interativa. <DocumentLink>Clique aqui</DocumentLink> para
      saber mais sobre isso.
    </Styled.p>
  </Container>
);

export default Advertising;
