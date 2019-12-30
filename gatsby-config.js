module.exports = {
  siteMetadata: {
    title: `Quanto Custa`,
    description: `Seu aplicativo diário na hora de economizar.`,
    author: `@quantocusta_me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quanto Custa`,
        short_name: `Quanto Custa`,
        description: `Aplicativo gratuito onde alagoanos podem buscar por produtos e combustíveis, visualizar onde é mais barato encontrar o que precisam e como chegar até lá.`,
        start_url: `/`,
        background_color: `#FDFFFF`,
        theme_color: `#562F58`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
