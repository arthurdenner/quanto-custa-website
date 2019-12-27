import React from 'react';
import Advertising from '../components/Advertising';
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
    <Features />
    <Testimonials />
    <Promote />
    <Advertising />
  </Layout>
);

export default IndexPage;
