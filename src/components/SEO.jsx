import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

function SEO({ description, title, titleTemplate }) {
  const siteMetadata = useSiteMetadata();
  const seo = {
    title,
    titleTemplate: titleTemplate || `%s | ${siteMetadata.title}`,
    description: description || siteMetadata.longDescription,
    socialImage: `${siteMetadata.siteUrl}${siteMetadata.socialImage}`,
    twitterImage: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
    url: `${siteMetadata.siteUrl}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <html lang={siteMetadata.siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.socialImage} />

      <meta property="og:site_name" content={siteMetadata.facebook} />
      <meta property="og:locale" content={siteMetadata.ogLanguage} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.socialImage} />
      <meta property="og:image:alt" content={seo.description} />

      <meta name="twitter:author" content={siteMetadata.author} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterImage} />
      <meta name="twitter:image:alt" content={seo.description} />
    </Helmet>
  );
}

SEO.defaultProps = {
  description: ``,
  titleTemplate: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
};

export default SEO;
