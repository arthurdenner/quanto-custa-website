/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import Badges from '../../components/Badges';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Hero = () => {
  const { shortDescription } = useSiteMetadata();

  return (
    <Container id="download" sx={{ mb: `8rem` }}>
      <Styled.h1 sx={{ mb: 3, mt: 0 }}>{shortDescription}</Styled.h1>
      <Styled.p sx={{ mb: 3 }}>
        O Quanto Custa é um aplicativo gratuito onde alagoanos podem buscar por
        produtos e combustíveis, visualizar onde é mais barato encontrar o que
        precisam e como chegar até lá.
      </Styled.p>
      <Badges />
    </Container>
  );
};

export default Hero;
