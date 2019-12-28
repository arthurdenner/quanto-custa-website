import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const NotFound = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "not_found.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, traceSVG: { color: "#e4e4e4" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <Img
      className={className}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default NotFound;
