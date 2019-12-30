import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            email
            facebook
            image
            instagram
            longDescription
            ogLanguage
            shortDescription
            siteLanguage
            siteUrl
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
