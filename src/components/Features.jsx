/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import DeviceThemed from '../elements/DeviceThemed';
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
    <Container sx={{ paddingBottom: 0 }}>
      <DeviceThemed />
    </Container>
    <FeaturesList />
  </Container>
);

export default Features;
