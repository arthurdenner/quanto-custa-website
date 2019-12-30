/**@jsx jsx */
import { Link } from 'gatsby';
import { Footer as ThemeFooter, jsx, Flex, Container } from 'theme-ui';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import ExternalLink from '../ExternalLink';
import Logo from '../Logo';
import { Download, Mail, Facebook, Instagram } from './icons';

const linkStyle = {
  display: `flex`,
  alignItems: `center`,
  p: [0, 0, 3],
};

const Footer = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <ThemeFooter sx={{ backgroundColor: `light` }}>
      <Container
        sx={{
          display: `flex`,
          flexDirection: [`column`, `column`, `row`],
          justifyContent: [null, null, `space-between`],
          alignItems: `center`,
        }}
      >
        <Logo id="footer" />
        <Flex
          sx={{
            justifyContent: `space-around`,
            width: [`full`, `full`, `auto`],
            mt: [4, 4, 0],
          }}
        >
          <Link
            aria-label="Link para seçäo de download do aplicativo"
            to="/#download"
            sx={linkStyle}
          >
            <Download />
          </Link>
          <ExternalLink
            aria-label="Enviar e-mail para o Quanto Custa"
            href={`mailto:${siteMetadata.email}`}
            sx={linkStyle}
          >
            <Mail />
          </ExternalLink>
          <ExternalLink
            aria-label="Ver página do Quanto Custa no Facebook"
            href={siteMetadata.facebook}
            sx={linkStyle}
          >
            <Facebook />
          </ExternalLink>
          <ExternalLink
            aria-label="Ver página do Quanto Custa no Instagram"
            href={siteMetadata.instagram}
            sx={linkStyle}
          >
            <Instagram />
          </ExternalLink>
        </Flex>
      </Container>
    </ThemeFooter>
  );
};

export default Footer;
