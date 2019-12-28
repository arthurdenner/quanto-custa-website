/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import About from '../sections/About';
import Advertising from '../sections/Advertising';
import Device from '../sections/Device';
import FAQ from '../sections/FAQ';
import Features from '../sections/Features';
import Hero from '../sections/Hero';
import Promote from '../sections/Promote';
import Testimonials from '../sections/Testimonials';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Página Inicial" />
    <Box sx={{ p: 0 }}>
      <Container
        sx={{
          display: `grid`,
          gridTemplateColumns: [null, null, `1fr 1fr`],
          alignItems: `center`,
          p: 0,
        }}
      >
        <Hero />
        <Device />
      </Container>
      <Features />
    </Box>
    <Testimonials />
    <Promote />
    <Advertising />
    <About />
    <FAQ />
  </Layout>
);

export default IndexPage;
