/** @jsx jsx */
import { Container, jsx, Box, Flex, Styled } from 'theme-ui';
import items from './items';

const FeatureListItem = ({ icon: Icon, title, subtitle }) => (
  <Flex
    sx={{
      flexDirection: [null, null, `column`],
      alignItems: [null, null, `center`],
      textAlign: [null, null, `center`],
    }}
  >
    <Icon sx={{ mr: [3, 3, 0] }} />
    <Box sx={{ flex: 1 }}>
      <Styled.h4 sx={{ mb: 2, mt: [0, 0, 2] }}>{title}</Styled.h4>
      <span sx={{ fontSize: 1 }}>{subtitle}</span>
    </Box>
  </Flex>
);

const Features = () => (
  <Container
    sx={{
      backgroundColor: `light`,
      margin: 0,
      maxWidth: `full`,
      paddingTop: [0, 0, `2rem`],
    }}
  >
    <Container
      sx={{
        display: `grid`,
        gridTemplateColumns: [null, null, `repeat(${items.length}, 1fr)`],
        gap: 4,
        p: 0,
      }}
    >
      {items.map(item => (
        <FeatureListItem key={item.title} {...item} />
      ))}
    </Container>
  </Container>
);

export default Features;
