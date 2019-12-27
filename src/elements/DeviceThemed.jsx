/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import DeviceDark from './DeviceDark';
import DeviceLight from './DeviceLight';

const DeviceThemed = () => {
  const [mode] = useColorMode();
  const isLight = mode === `light`;
  const ColoredDevice = isLight ? DeviceLight : DeviceDark;
  const boxShadow = isLight
    ? `0px 15px 35px rgba(0, 0, 0, 0.2)`
    : `0px 15px 35px rgba(89, 89, 89, 0.3)`;

  return (
    <ColoredDevice
      sx={{
        boxShadow,
        borderRadius: `36px`,
        marginTop: `-8rem`,
        maxWidth: 350,
      }}
    />
  );
};

export default DeviceThemed;
