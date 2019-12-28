/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import FeaturesList from './FeaturesList';

const Features = () => (
  <Container
    sx={{
      backgroundColor: `light`,
      margin: 0,
      maxWidth: `full`,
      padding: 0,
    }}
  >
    <FeaturesList />
  </Container>
);

export default Features;
