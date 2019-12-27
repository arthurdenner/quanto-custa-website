/**@jsx jsx */
import { Footer as ThemeFooter, jsx, Flex } from 'theme-ui';
import { Download, Mail, Facebook, Instagram } from '../elements/FooterIcons';
import Logo from '../elements/Logo';

const Footer = () => (
  <ThemeFooter sx={{ backgroundColor: `light`, p: 2 }}>
    <Logo />
    <Flex sx={{ justifyContent: `space-around`, mt: 4 }}>
      <Download />
      <Mail />
      <Facebook />
      <Instagram />
    </Flex>
  </ThemeFooter>
);

export default Footer;
