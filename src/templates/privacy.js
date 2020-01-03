import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Template({ data }) {
  const title = `Política de Privacidade`;
  const { markdownRemark } = data;
  const { html, excerpt } = markdownRemark;
  const description = excerpt.replace(title, ``).trim();

  return (
    <Layout>
      <SEO description={description} title={title} />
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        title
      }
    }
  }
`;
