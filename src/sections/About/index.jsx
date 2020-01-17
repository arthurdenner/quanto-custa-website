/** @jsx jsx */
import { Box, Container, jsx, Styled } from 'theme-ui';
import ExternalLink from '../../components/ExternalLink';
import { Group } from './icons';

const ArthurLink = ({ children }) => (
  <ExternalLink href="https://www.linkedin.com/in/arthurdenner">
    {children}
  </ExternalLink>
);

const MicaelleLink = ({ children }) => (
  <ExternalLink href="https://msha.ke/micaelle.morais">{children}</ExternalLink>
);

const About = () => (
  <Box sx={{ backgroundColor: `light` }}>
    <Container>
      <Styled.h2>
        <Group sx={{ mr: 3 }} /> Por trás do projeto
      </Styled.h2>
      <Styled.p>
        O Quanto Custa é um projeto desenvolvido e gerenciado por{` `}
        <ArthurLink>Arthur Denner</ArthurLink>.
      </Styled.p>
      <Styled.p>
        Ele foi idealizado por <MicaelleLink>Micaelle Morais</MicaelleLink> e
        Arthur, em 2018, e era uma uma aplicação web inicialmente.
      </Styled.p>
    </Container>
  </Box>
);

export default About;
