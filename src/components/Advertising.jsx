/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import { HandShake } from '../elements/AdvertisingIcons';

const DocumentLink = ({ children }) => (
  <Styled.a
    href="https://bit.ly/373ZaJz"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ textDecoration: `underline` }}
  >
    {children}
  </Styled.a>
);

const Advertising = () => (
  <Container>
    <Styled.h2 sx={{ display: `flex`, fontSize: [2, 3], lineHeight: 1, m: 0 }}>
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
