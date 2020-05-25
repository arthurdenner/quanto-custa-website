/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import ExternalLink from '../../components/ExternalLink';
import { HandShake } from './icons';

const DocumentLink = ({ children }) => (
  <ExternalLink href="https://drive.google.com/open?id=1Mk_QnFEsU5oNsBLAAyXIWTPdJYg1GEmm">
    {children}
  </ExternalLink>
);

const FormLink = ({ children }) => (
  <ExternalLink href="https://airtable.com/shr7ykMS2IwW8v5Sq">
    {children}
  </ExternalLink>
);

const Advertising = () => (
  <Container>
    <Styled.h2>
      <HandShake sx={{ mr: 3 }} /> Seja nosso parceiro
    </Styled.h2>
    <Styled.p>
      Você também pode usar o Quanto Custa como um meio de divulgação. É
      possível anunciar seu negócio, produto ou serviço no aplicativo através de
      uma propaganda interativa.
    </Styled.p>
    <Styled.p>
      Veja <DocumentLink>este documento</DocumentLink> para saber mais sobre
      isso.
    </Styled.p>
    <Styled.p>
      Envie sua propaganda através <FormLink>deste formulário</FormLink>.
    </Styled.p>
  </Container>
);

export default Advertising;
