/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Box, Flex } from 'theme-ui';
import NotFound from '../sections/NotFound';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <Flex
      sx={{
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100%`,
        p: 4,
      }}
    >
      <Box sx={{ maxWidth: 400, width: `full` }}>
        <NotFound />
      </Box>
      <p>Parece que você está perdido</p>
      <Link
        sx={{
          variant: `buttons.transparent`,
          textDecoration: `underline`,
        }}
        to="/"
      >
        Voltar à página inicial
      </Link>
    </Flex>
  </Layout>
);

export default NotFoundPage;
