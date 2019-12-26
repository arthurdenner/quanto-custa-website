import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
