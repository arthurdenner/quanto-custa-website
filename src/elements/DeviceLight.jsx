import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const DeviceLight = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "device_light.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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

export default DeviceLight;
