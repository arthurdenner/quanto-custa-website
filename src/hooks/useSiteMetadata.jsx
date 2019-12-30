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
            instagram
            longDescription
            ogLanguage
            shortDescription
            siteLanguage
            siteUrl
            socialImage
            title
            twitterImage
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
