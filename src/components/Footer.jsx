/**@jsx jsx */
import { Link } from 'gatsby';
import { Footer as ThemeFooter, jsx, Flex } from 'theme-ui';
import ExternalLink from '../elements/ExternalLink';
import { Download, Mail, Facebook, Instagram } from '../elements/FooterIcons';
import Logo from '../elements/Logo';

const linkStyle = {
  display: `flex`,
  alignItems: `center`,
  p: [0, 0, 3],
};

const Footer = () => (
  <ThemeFooter
    sx={{
      backgroundColor: `light`,
      display: `flex`,
      flexDirection: [`column`, `column`, `row`],
      justifyContent: [null, null, `space-between`],
      alignItems: `center`,
    }}
  >
    <Logo />
    <Flex
      sx={{
        justifyContent: `space-around`,
        width: [`full`, `full`, `auto`],
        mt: [4, 4, 0],
      }}
    >
      <Link to="/#download" sx={linkStyle}>
        <Download />
      </Link>
      <ExternalLink href="mailto:quanto.custa.app@gmail.com" sx={linkStyle}>
        <Mail />
      </ExternalLink>
      <ExternalLink href="https://facebook.com/quantocusta.me" sx={linkStyle}>
        <Facebook />
      </ExternalLink>
      <ExternalLink href="https://instagram.com/quantocusta.me" sx={linkStyle}>
        <Instagram />
      </ExternalLink>
    </Flex>
  </ThemeFooter>
);

export default Footer;
