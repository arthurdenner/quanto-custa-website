/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import DeviceThemed from './themed';

const Device = () => (
  <Box sx={{ backgroundColor: [`light`, `light`, `background`], p: 3 }}>
    <DeviceThemed />
  </Box>
);

export default Device;
