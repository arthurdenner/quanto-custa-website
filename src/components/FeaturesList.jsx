/** @jsx jsx */
import { Container, jsx, Box, Flex, Styled } from 'theme-ui';
import { Marker, Shield, Stopclock } from '../elements/FeatureIcons';

const items = [
  {
    icon: Marker,
    title: `Informação em qualquer lugar`,
    subtitle: `Busque onde quiser, de onde estiver`,
  },
  {
    icon: Stopclock,
    title: `Economia de tempo`,
    subtitle: `O que você precisa a alguns cliques de distância`,
  },
  {
    icon: Shield,
    title: `Confiabilidade nos resultados`,
    subtitle: `Dados fornecidos pela Secretaria de Estado da Fazenda - SEFAZ`,
  },
];

const FeatureListItem = ({ icon: Icon, title, subtitle }) => (
  <Flex sx={{ mt: 4 }}>
    <Icon sx={{ mr: 3 }} />
    <Box sx={{ flex: 1 }}>
      <Styled.h4 sx={{ mb: 2 }}>{title}</Styled.h4>
      <span sx={{ fontSize: 1 }}>{subtitle}</span>
    </Box>
  </Flex>
);

const FeaturesList = () => (
  <Container sx={{ paddingTop: 0 }}>
    {items.map(item => (
      <FeatureListItem key={item.title} {...item} />
    ))}
  </Container>
);

export default FeaturesList;
