import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'theme-ui';
import Layout from '../components/Layout';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <Layout>
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
