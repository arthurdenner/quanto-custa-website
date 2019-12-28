/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import DeviceDark from './DeviceDark';
import DeviceLight from './DeviceLight';

const DeviceThemed = () => {
  const [mode] = useColorMode();
  const isLight = mode === `light`;
  const ColoredDevice = isLight ? DeviceLight : DeviceDark;

  return (
    <ColoredDevice
      sx={{
        marginTop: [`-7rem`, `-7rem`, 0],
        maxWidth: 400,
        marginRight: `auto`,
        marginLeft: `auto`,
      }}
    />
  );
};

export default DeviceThemed;
