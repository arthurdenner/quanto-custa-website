import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <Hero />
  </Layout>
);

export default IndexPage;
