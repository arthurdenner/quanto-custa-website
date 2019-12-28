/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import DeviceThemed from '../elements/DeviceThemed';

const Device = () => (
  <Container sx={{ p: 0 }}>
    <DeviceThemed />
  </Container>
);

export default Device;
