/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import DeviceThemed from '../elements/DeviceThemed';

const Device = () => (
  <Box sx={{ backgroundColor: [`light`, `light`, `background`], p: 3 }}>
    <DeviceThemed sx={{ maxWidth: 400 }} />
  </Box>
);

export default Device;
