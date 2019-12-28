/** @jsx jsx */
import { Box, Container, jsx, Styled } from 'theme-ui';
import { Group } from '../elements/AboutIcons';
import ExternalLink from '../elements/ExternalLink';

const ArthurLink = ({ children }) => (
  <ExternalLink href="https://www.linkedin.com/in/arthurdenner">
    {children}
  </ExternalLink>
);

const MicaelleLink = ({ children }) => (
  <ExternalLink href="https://www.instagram.com/micaelle.morais">
    {children}
  </ExternalLink>
);

const About = () => (
  <Box sx={{ backgroundColor: `light` }}>
    <Container>
      <Styled.h2>
        <Group sx={{ mr: 3 }} /> Por trás do projeto
      </Styled.h2>
      <Styled.p>
        O Quanto Custa é um projeto desenvolvido e gerenciado por{` `}
        <ArthurLink>Arthur Denner</ArthurLink>. Ele foi idealizado por{` `}
        <MicaelleLink>Micaelle Morais</MicaelleLink> e Arthur, em 2018, e era
        uma uma aplicação web inicialmente.
      </Styled.p>
    </Container>
  </Box>
);

export default About;
