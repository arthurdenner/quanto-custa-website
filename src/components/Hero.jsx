/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import Badges from '../elements/Badges';

const Hero = () => (
  <Container id="download" sx={{ mb: 7 }}>
    <Styled.h1 sx={{ mb: 3, mt: 0 }}>
      Seu aplicativo diário na hora de economizar.
    </Styled.h1>
    <Styled.p>
      O Quanto Custa é um aplicativo gratuito onde alagoanos podem buscar por
      produtos e combustíveis, visualizar onde é mais barato encontrar o que
      precisam e como chegar até lá.
    </Styled.p>
    <Badges />
  </Container>
);

export default Hero;
