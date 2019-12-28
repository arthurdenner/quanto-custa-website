/**@jsx jsx */
import { Link } from 'gatsby';
import { Footer as ThemeFooter, jsx, Flex } from 'theme-ui';
import ExternalLink from '../elements/ExternalLink';
import { Download, Mail, Facebook, Instagram } from '../elements/FooterIcons';
import Logo from '../elements/Logo';

const Footer = () => (
  <ThemeFooter sx={{ backgroundColor: `light` }}>
    <Logo />
    <Flex sx={{ justifyContent: `space-around`, mt: 4 }}>
      <Link to="/#download">
        <Download />
      </Link>
      <ExternalLink href="mailto:quanto.custa.app@gmail.com">
        <Mail />
      </ExternalLink>
      <ExternalLink href="https://facebook.com/quantocusta.me">
        <Facebook />
      </ExternalLink>
      <ExternalLink href="https://instagram.com/quantocusta.me">
        <Instagram />
      </ExternalLink>
    </Flex>
  </ThemeFooter>
);

export default Footer;
