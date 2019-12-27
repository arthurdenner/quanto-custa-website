/** @jsx jsx */
import { Container, jsx, Box, Styled } from 'theme-ui';
import { Marker, Shield, Stopclock } from '../elements/FeatureIcons';

const itens = [
  {
    icon: Marker,
    title: `Informação em qualquer lugar`,
    subtitle: `Busque onde quiser de onde estiver`,
  },
  {
    icon: Stopclock,
    title: `Economia de tempo`,
    subtitle: `O que precisar a alguns cliques de você`,
  },
  {
    icon: Shield,
    title: `Confiabilidade nos resultados`,
    subtitle: `Dados fornecidos pela Secretaria de Estado da Fazenda - SEFAZ`,
  },
];

const FeatureListItem = ({ icon: Icon, title, subtitle }) => (
  <Box
    sx={{
      display: `grid`,
      gap: 3,
      gridTemplateColumns: `auto 1fr`,
    }}
  >
    <Icon />
    <Box>
      <Styled.h4 sx={{ mb: 2 }}>{title}</Styled.h4>
      <span sx={{ fontSize: 1 }}>{subtitle}</span>
    </Box>
  </Box>
);

const FeaturesList = () => (
  <Container
    sx={{
      display: `grid`,
      gridTemplateRows: `repeat(${itens.length}, auto)`,
      gap: 4,
      paddingTop: 0,
    }}
  >
    {itens.map(item => (
      <FeatureListItem key={item.title} {...item} />
    ))}
  </Container>
);

export default FeaturesList;
