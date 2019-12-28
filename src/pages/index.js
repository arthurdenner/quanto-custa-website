/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import About from '../components/About';
import Advertising from '../components/Advertising';
import Device from '../components/Device';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Promote from '../components/Promote';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <Hero />
    <Box sx={{ backgroundColor: `light`, p: 4 }}>
      <Container
        sx={{
          display: `grid`,
          gridTemplateColumns: [null, null, `1fr 1fr`],
          alignItems: `center`,
          gap: 4,
          p: 0,
        }}
      >
        <Device />
        <Features />
      </Container>
    </Box>
    <Testimonials />
    <Promote />
    <Advertising />
    <About />
    <FAQ />
  </Layout>
);

export default IndexPage;
