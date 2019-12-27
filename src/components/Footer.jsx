/**@jsx jsx */
import { Footer as ThemeFooter, jsx } from 'theme-ui';
import Logo from '../elements/Logo';

const Footer = () => (
  <ThemeFooter sx={{ backgroundColor: `light`, p: 4 }}>
    <Logo />
  </ThemeFooter>
);

export default Footer;
