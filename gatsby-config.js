module.exports = {
  siteMetadata: {
    title: `Quanto Custa`,
    description: `Aplicativo onde alagoanos podem pesquisar preços de produtos e combustíveis.`,
    author: `@quantocusta.me`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quanto Custa`,
        short_name: `Quanto Custa`,
        start_url: `/`,
        background_color: `hsla(297, 30%, 46%, 0.5)`,
        theme_color: `hsla(297, 30%, 46%, 0.5)`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
