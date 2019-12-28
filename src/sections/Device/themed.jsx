/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import DeviceDark from './dark';
import DeviceLight from './light';

const DeviceThemed = () => {
  const [mode] = useColorMode();
  const isLight = mode === `light`;
  const ColoredDevice = isLight ? DeviceLight : DeviceDark;

  return (
    <ColoredDevice
      sx={{
        marginTop: [`-7.5rem`, `-7.5rem`, 0],
        maxWidth: 400,
        marginRight: `auto`,
        marginLeft: `auto`,
      }}
    />
  );
};

export default DeviceThemed;
