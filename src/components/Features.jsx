/** @jsx jsx */
import { Container, jsx, useColorMode } from 'theme-ui';
import DeviceDark from '../elements/DeviceDark';
import DeviceLight from '../elements/DeviceLight';
import FeaturesList from './FeaturesList';

const Features = () => {
  const [mode] = useColorMode();
  const ColoredDevice = mode === `light` ? DeviceLight : DeviceDark;

  return (
    <Container
      sx={{
        backgroundColor: `light`,
        margin: 0,
        maxWidth: `full`,
        padding: 0,
      }}
    >
      <Container sx={{ paddingBottom: 5 }}>
        <ColoredDevice
          sx={{
            borderRadius: `36px`,
            marginTop: `-8rem`,
            maxWidth: 350,
          }}
        />
      </Container>
      <FeaturesList />
    </Container>
  );
};

export default Features;
